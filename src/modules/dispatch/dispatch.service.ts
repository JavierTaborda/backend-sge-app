import { Injectable, NotFoundException } from '@nestjs/common';
import { MySQLPrismaService } from '../../database/mysql.service';
import { Prisma } from '../../prisma-clients/mysql/client';
import type { DispatchOrderParamsDto } from './dtos/dispatch-order-params.dto';
import {
  DispatchItemDto,
  DispatchOrderDto,
  DispatchOrderWithItemsDto,
} from './dtos/dispatch-order.dto';

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

@Injectable()
export class DispatchService {
  constructor(private readonly mysql: MySQLPrismaService) {}

  getBarcodesWithoutSerial(): string[] {
    return [
      '7590000000009',
      '7590000000016',
      '7590000000023',
      '7590000000030',
      '7590000000047',
    ];
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
      Prisma.sql`(i.prednum, i.pednum) IN (${orderKeys})`,
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
      Prisma.sql`i.prednum = ${prednum} AND i.pednum = ${pednum}`,
    );

    return this.mapOrderItems(rows);
  }

  private async findOrderItemRows(where: Prisma.Sql): Promise<DispatchItemRow[]> {
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
        FROM mvpredes m
        INNER JOIN cbpredes h
          ON h.prednum = m.prednum AND h.pednum = m.pednum
        WHERE NOT (
          h.cerrado = 1
          AND h.fecfinal >= CURDATE()
          AND h.fecfinal < CURDATE() + INTERVAL 1 DAY
        )
        UNION ALL
        SELECT
          d.prednum, d.itemnum, d.pednum, d.rennum, d.codalma,
          d.codart, d.compuesto, d.manjser, d.refbarra, d.codbarra,
          d.serial1, d.recouser, d.horacapture
        FROM dtpredes d
        INNER JOIN cbpredes h
          ON h.prednum = d.prednum AND h.pednum = d.pednum
        WHERE h.cerrado = 1
          AND h.fecfinal >= CURDATE()
          AND h.fecfinal < CURDATE() + INTERVAL 1 DAY
      ) i
      LEFT JOIN mtarticulos a ON a.codart = i.codart
      LEFT JOIN sge.users u ON u.userId = i.recouser
      WHERE ${where}
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
        FROM cbpredes h
        WHERE ${Prisma.join(conditions, ' AND ')}
        ORDER BY h.prednum DESC, h.pednum ASC
        ${params ? Prisma.empty : Prisma.sql`LIMIT 100`}
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
