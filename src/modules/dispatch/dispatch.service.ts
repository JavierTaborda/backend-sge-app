import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MySQLPrismaService } from '../../database/mysql.service';
import { Prisma } from '../../prisma-clients/mysql/client';
import { getVzlaDateForDB } from '../../utils/date.venezuela.db';
import type { DispatchOrderParamsDto } from './dtos/dispatch-order-params.dto';
import {
  DispatchItemDto,
  DispatchOrderDto,
  DispatchOrderWithItemsDto,
} from './dtos/dispatch-order.dto';
import type { ReceivePredispatchDto } from './dtos/receive-predispatch.dto';

type DatabaseFlag = boolean | number | bigint;

type DispatchHeaderRow = Omit<DispatchOrderDto, 'fecfinal' | 'duracion'> & {
  fecfinal: Date | null;
  durationSeconds: number | bigint | null;
};

type DispatchItemRow = Omit<
  DispatchItemDto,
  | 'Articulo'
  | 'compuesto'
  | 'manjser'
  | 'changed'
  | 'selected'
  | 'objectstate'
  | 'objecticon'
  | 'lectura'
  | 'objectstate2'
> & {
  compuesto: DatabaseFlag;
  manjser: DatabaseFlag;
};

const DB = Prisma.raw('`DBTESTSGE`');

@Injectable()
export class DispatchService {
  constructor(private readonly mysql: MySQLPrismaService) {}

  getBarcodesWithoutSerial(): string[] {
    return [
      '7590020010965',
      '7590020010972',
      '7590020010989',
      '7590020011016',
      '7590020011030',
      '7590020010996',
      '7590020011009',
      '7590020011023',
      '7590020011047',
      '7590020011054',
      '7590020011207',
      '7590020007170',
      '7590020011160',
      '7590020007842',
      '7590020005107',
      '7590020011061',
      '7590020011153',
      '7590020011344',
      '7590020011337',
      '7590020011108',
      '7590020011115',
      '7590020011221',
      '7590020011276',
      '7590020011917',
      '7590020011283',
      '7590020009549',
      '7590020011269',
      '7590020011252',
      '7590020011078',
      '7590020011085',
      '7590020011214',
      '7590020011122',
      '7590020011238',
      '7590020011245',
      '7590020010781',
      '7590020010750',
      '7590020010736',
      '7590020010743',
      '7590020012167',
      '7590020010774',
    ];
  }

  async savePredispatch(
    payload: ReceivePredispatchDto,
    recouser: number,
  ): Promise<void> {
    if (
      payload.items.some(
        (item) => item.prednum !== payload.prednum || item.pednum !== payload.pednum,
      )
    ) {
      throw new BadRequestException(
        'Todos los items deben pertenecer al mismo predespacho',
      );
    }

    const orderedItems = [...payload.items].sort(
      (left, right) => left.itemnum - right.itemnum,
    );
    const firstCaptureValue = orderedItems[0].horacapture;
    const lastCaptureValue = orderedItems[orderedItems.length - 1].horacapture;

    if (firstCaptureValue === null || lastCaptureValue === null) {
      throw new BadRequestException(
        'El primer y ultimo item deben tener una hora de captura',
      );
    }

    const fecdesp = getVzlaDateForDB(new Date(firstCaptureValue));
    const fecfinal = getVzlaDateForDB(new Date(lastCaptureValue));
    const horainicio = fecdesp.toISOString().slice(11, 19);
    const horafinal = fecfinal.toISOString().slice(11, 19);

    if (
      Number.isNaN(fecdesp.getTime()) ||
      Number.isNaN(fecfinal.getTime()) ||
      fecfinal < fecdesp
    ) {
      throw new BadRequestException(
        'Las horas del primer y ultimo item no son validas',
      );
    }

    await this.mysql.$transaction(async (transaction) => {
      await transaction.$executeRaw(Prisma.sql`
        UPDATE ${DB}.cbpredes
        SET fecdesp = ${fecdesp},
            fecfinal = ${fecfinal},
            horainicio = ${horainicio},
            horafinal = ${horafinal}
        WHERE prednum = ${payload.prednum} AND pednum = ${payload.pednum}
      `);

      for (const item of payload.items) {
        await transaction.$executeRaw(Prisma.sql`
          UPDATE ${DB}.mvpredes
          SET rennum = ${item.rennum},
              codalma = ${item.codalma},
              codart = ${item.codart},
              compuesto = ${item.compuesto === true || item.compuesto === 1},
              manjser = ${item.manjser === true || item.manjser === 1},
              codbarra = ${item.codbarra},
              serial1 = ${item.serial1},
              refbarra = ${item.refbarra},
              horacapture = ${item.horacapture === null ? null : getVzlaDateForDB(new Date(item.horacapture)).toISOString().slice(11, 19)},
              recouser = ${recouser}
          WHERE prednum = ${payload.prednum}
            AND pednum = ${payload.pednum}
            AND itemnum = ${item.itemnum}
        `);
      }
    });
  }

  getOrders(): Promise<DispatchOrderDto[]> {
    return this.findOrders();
  }

  async getOrdersWithItems(): Promise<DispatchOrderWithItemsDto[]> {
    const orders = await this.getOrders();

    if (orders.length === 0) {
      return [];
    }

    const orderKeys = Prisma.join(
      orders.map(
        ({ prednum, pednum }) => Prisma.sql`(${prednum}, ${pednum})`,
      ),
    );
    const rows = await this.findOrderItemRows(
      Prisma.sql`(m.prednum, m.pednum) IN (${orderKeys})`,
      Prisma.sql`(d.prednum, d.pednum) IN (${orderKeys})`,
    );
    const itemsByOrder = new Map<string, DispatchItemDto[]>();

    for (const item of this.mapOrderItems(rows)) {
      const key = `${item.prednum}:${item.pednum}`;
      const items = itemsByOrder.get(key) ?? [];
      items.push(item);
      itemsByOrder.set(key, items);
    }

    return orders.map((order) => ({
      ...order,
      items: itemsByOrder.get(`${order.prednum}:${order.pednum}`) ?? [],
    }));
  }

  async getOrder(prednum: number, pednum: number): Promise<DispatchOrderDto> {
    const [order] = await this.findOrders({ prednum, pednum });

    if (!order) {
      throw new NotFoundException(
        `No se encontro un despacho no anulado para el predespacho ${prednum} y pedido ${pednum}`,
      );
    }

    return order;
  }

  async getOrderItems(
    prednum: number,
    pednum: number,
  ): Promise<DispatchItemDto[]> {
    await this.getOrder(prednum, pednum);

    const rows = await this.findOrderItemRows(
      Prisma.sql`m.prednum = ${prednum} AND m.pednum = ${pednum}`,
      Prisma.sql`d.prednum = ${prednum} AND d.pednum = ${pednum}`,
    );

    return this.mapOrderItems(rows);
  }

  private async findOrderItemRows(
    mvWhere: Prisma.Sql,
    dtWhere: Prisma.Sql,
  ): Promise<DispatchItemRow[]> {
    const rows = await this.mysql.$queryRaw<DispatchItemRow[]>(Prisma.sql`
      SELECT
        i.prednum, i.itemnum, i.pednum, i.rennum,
        TRIM(i.codalma) AS codalma, TRIM(i.codart) AS codart,
        NULLIF(TRIM(a.artdes), '') AS artdes,
        NULLIF(TRIM(i.refbarra), '') AS refbarra,
        i.compuesto, i.manjser,
        NULLIF(TRIM(i.codbarra), '') AS codbarra,
        NULLIF(TRIM(i.serial1), '') AS serial1,
        CAST(i.recouser AS CHAR) AS recouser,
        u.userUsername AS supervisor,
        TIME_FORMAT(i.horacapture, '%H:%i:%s') AS horacapture
      FROM (
        SELECT
          m.prednum, m.itemnum, m.pednum, m.rennum, m.codalma,
          m.codart, m.compuesto, m.manjser, m.refbarra, m.codbarra,
          m.serial1, m.recouser, m.horacapture
        FROM ${DB}.mvpredes m
        INNER JOIN ${DB}.cbpredes h
          ON h.prednum = m.prednum AND h.pednum = m.pednum
        WHERE NOT (
          h.cerrado = 1
          AND h.fecfinal >= CURDATE()
          AND h.fecfinal < CURDATE() + INTERVAL 1 DAY
        )
          AND ${mvWhere}
        UNION ALL
        SELECT
          d.prednum, d.itemnum, d.pednum, d.rennum, d.codalma,
          d.codart, d.compuesto, d.manjser, d.refbarra, d.codbarra,
          d.serial1, d.recouser, d.horacapture
        FROM ${DB}.dtpredes d
        INNER JOIN ${DB}.cbpredes h
          ON h.prednum = d.prednum AND h.pednum = d.pednum
        WHERE h.cerrado = 1
          AND h.fecfinal >= CURDATE()
          AND h.fecfinal < CURDATE() + INTERVAL 1 DAY
          AND ${dtWhere}
      ) i
      LEFT JOIN mtarticulos a ON a.codart = i.codart
      LEFT JOIN sge.users u ON u.userId = i.recouser
      ORDER BY i.itemnum ASC, i.serial1 ASC
    `);
  
    return rows;
  }

  private mapOrderItems(rows: DispatchItemRow[]): DispatchItemDto[] {
    return rows.map<DispatchItemDto>(({ compuesto, manjser, ...item }) => ({
      ...item,
      Articulo: item.artdes ? `${item.codart} - ${item.artdes}` : item.codart,
      compuesto: Number(compuesto),
      manjser: Number(manjser) === 1,
      changed: false,
      selected: false,
      objectstate: 'None',
      objecticon: 'sap-icon://None',
      lectura: Number(manjser) === 1 ? null : 'Sin serial',
      objectstate2: 'Warning',
    }));
  }

  private async findOrders(
    params?: DispatchOrderParamsDto,
  ): Promise<DispatchOrderDto[]> {
    const conditions = [Prisma.sql`h.anulado = 0`];

     if (params) {
      conditions.push(Prisma.sql`h.estatus <> 2`);
      conditions.push(Prisma.sql`h.prednum = ${params.prednum}`);
      conditions.push(Prisma.sql`h.pednum = ${params.pednum}`);
    } else {
      conditions.push(
        Prisma.sql`(h.estatus IN (0, 1) OR (h.cerrado = 1 AND h.fecfinal >= CURDATE() AND h.fecfinal < CURDATE() + INTERVAL 1 DAY))`,
      );
    }

    const rows = await this.mysql.$queryRaw<DispatchHeaderRow[]>(Prisma.sql`
      SELECT
        h.prednum, h.pednum,
        CASE WHEN h.cerrado = 1 THEN 'Finalizado' ELSE 'En despacho' END AS conformado,
        DATE_FORMAT(h.fecdesp, '%Y-%m-%d %H:%i:%s') AS fecdesp,
        DATE_FORMAT(h.fecfinal, '%Y-%m-%d %H:%i:%s') AS fecfinalStr,
        h.fecfinal,
        TIMESTAMPDIFF(SECOND, h.fecdesp, h.fecfinal) AS durationSeconds,
        TRIM(h.codcli) AS co_cli,
        NULLIF(TRIM(c.clides), '') AS Cliente,
        TRIM(h.codzon) AS co_zon,
        NULLIF(TRIM(z.zondes), '') AS Zona,
        TRIM(h.codven) AS co_ven,
        NULLIF(TRIM(v.vendes), '') AS Vendedor,
        h.cantdesp, CAST(h.owneruser AS CHAR) AS owneruser,
        u.userUsername AS supervisor
      FROM (
        SELECT h.prednum, h.pednum, h.codcli, h.codzon, h.codven,
          h.cerrado, h.fecdesp, h.fecfinal, h.cantdesp, h.owneruser
        FROM ${DB}.cbpredes h
        WHERE ${Prisma.join(conditions, ' AND ')}
        ORDER BY h.prednum DESC, h.pednum ASC
      ) h
      LEFT JOIN mtclientes c ON c.codcli = h.codcli
      LEFT JOIN clzonas z ON z.codzon = h.codzon
      LEFT JOIN clvendedores v ON v.codven = h.codven
      LEFT JOIN sge.users u ON u.userId = h.owneruser
      ORDER BY h.prednum DESC, h.pednum ASC
    `);

    return rows.map(({ fecfinal, durationSeconds, ...header }) => ({
      ...header,
      fecfinal: fecfinal?.toISOString() ?? null,
      duracion:
        durationSeconds === null
          ? null
          : this.formatDuration(Number(durationSeconds)),
    }));
  }

  private formatDuration(seconds: number): string {
    const absolute = Math.abs(seconds);
    const hours = String(Math.floor(absolute / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((absolute % 3600) / 60)).padStart(2, '0');
    const remainder = String(absolute % 60).padStart(2, '0');
    return `${seconds < 0 ? '-' : ''}${hours}:${minutes}:${remainder}`;
  }
}
