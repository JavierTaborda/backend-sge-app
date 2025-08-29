import { Injectable } from '@nestjs/common';
import { DateUtils } from 'src/utils/date.utils';
import { SQLServerPrismaService } from '../../database/sqlserver.service';
import { AprobacionPedidoDto } from './dtos/aprobacion.pedido.dto';
import { mapRawPedidos } from './helpers/mapRawPedidos';
import { RawPedidoRow } from './types/RawPedidoRow';

@Injectable()
export class OrdersService {
  constructor(private readonly sql: SQLServerPrismaService) {}
  async GetPedidos() {
    const { start, end } = DateUtils.getCurrentMonthRange();
    return this.sql.pedidos.findMany({
      where: {
        fec_emis: {
          gte: start, //gte: since / desde
          lte: end, //lte: to / hasta
        },
      },
      include: { reng_ped: true },
    });
  }

  async GetAprobacionPedidos(): Promise<AprobacionPedidoDto[]> {
    const { start, end } = DateUtils.getCurrentMonthRange();

    const result = (await this.sql.$queryRawUnsafe(`
     SELECT 
      p.fact_num,
      p.status AS estatus,
      p.comentario,
      CAST(p.saldo AS VARCHAR) AS saldo,
      p.fec_emis,
      p.fec_venc,
      p.co_cli,
      c.cli_des,
      CAST(c.mont_cre AS FLOAT) AS credito,
      p.co_ven,
      v.ven_des,
      p.dir_ent,
      p.forma_pag,
      co.cond_des ,
      p.revisado,
      CAST(p.tot_bruto AS VARCHAR) AS tot_bruto,
      CAST(p.tot_neto AS VARCHAR) AS tot_neto,
      CAST(p.glob_desc AS VARCHAR) AS glob_desc,
      CAST(p.iva AS VARCHAR) AS iva,
      CAST(p.impresa AS INT) AS impresa,
      p.aux02,
      CAST(p.tasa AS VARCHAR) AS tasa,
      p.moneda,
      CAST(p.anulada AS INT) AS anulada,
      c.co_zon,
      z.zon_des,
      r.reng_num,
      r.co_art,
      a.art_des as art_des,
      r.co_alma,
      CAST(r.total_art AS VARCHAR) AS total_art,
      CAST(r.stotal_art AS VARCHAR) AS stotal_art,
      CAST(r.pendiente AS VARCHAR) AS pendiente,
      r.uni_venta,
      CAST(r.prec_vta AS VARCHAR) AS prec_vta,
      CAST(r.prec_vta2 AS VARCHAR) AS prec_vta2,
      CAST(r.reng_neto AS VARCHAR) AS reng_neto,
      CAST(r.porc_desc AS VARCHAR) AS porc_desc,
      r.tipo_imp

    FROM pedidos p
    LEFT JOIN clientes c ON p.co_cli = c.co_cli
    LEFT JOIN zona z ON c.co_zon = z.co_zon
    LEFT JOIN vendedor v ON p.co_ven = v.co_ven
    LEFT JOIN reng_ped r ON p.fact_num = r.fact_num
    LEFT JOIN art a ON r.co_art = a.co_art
    LEFT JOIN condicio co ON p.forma_pag= co.co_cond
    WHERE p.fec_emis BETWEEN '${start.toISOString()}' AND '${end.toISOString()}'
    ORDER BY p.fact_num, r.reng_num
  `)) as RawPedidoRow[];

    return mapRawPedidos(result);
  }

  async GetPedidosFilters(
    dateIni?: Date,
    dateEnd?: Date,
    estatus?: string,
    cancelled?: boolean,
    vendor?: string,
  ): Promise<AprobacionPedidoDto[]> {
    const filters: string[] = [];

    if (dateIni && dateEnd) {
      filters.push(
        `p.fec_emis BETWEEN '${dateIni.toISOString()}' AND '${dateEnd.toISOString()}'`,
      );
    }

    if (estatus) {
      filters.push(`p.revisado = '${estatus}'`);
    }

    if (typeof cancelled === 'boolean') {
      filters.push(`p.anulada = ${cancelled ? 1 : 0}`);
    }

    if (vendor) {
      filters.push(`p.co_ven = '${vendor}'`);
    }

    const whereClause =
      filters.length > 0 ? `WHERE ${filters.join(' AND ')}` : '';

    const result = (await this.sql.$queryRawUnsafe(`
    SELECT 
      p.fact_num,
      p.status AS estatus,
      p.comentario,
      CAST(p.saldo AS VARCHAR) AS saldo,
      p.fec_emis,
      p.fec_venc,
      p.co_cli,
      c.cli_des,
      CAST(c.mont_cre AS FLOAT) AS credito,
      p.co_ven,
      v.ven_des,
      p.dir_ent,
      p.forma_pag,
      co.cond_des,
      p.revisado,
      CAST(p.tot_bruto AS VARCHAR) AS tot_bruto,
      CAST(p.tot_neto AS VARCHAR) AS tot_neto,
      CAST(p.glob_desc AS VARCHAR) AS glob_desc,
      CAST(p.iva AS VARCHAR) AS iva,
      CAST(p.impresa AS INT) AS impresa,
      p.aux02,
      CAST(p.tasa AS VARCHAR) AS tasa,
      p.moneda,
      CAST(p.anulada AS INT) AS anulada,
      c.cond_des ,
      z.zon_des,
      r.reng_num,
      r.co_art,
      a.art_des as art_des,
      r.co_alma,
      CAST(r.total_art AS VARCHAR) AS total_art,
      CAST(r.stotal_art AS VARCHAR) AS stotal_art,
      CAST(r.pendiente AS VARCHAR) AS pendiente,
      r.uni_venta,
      CAST(r.prec_vta AS VARCHAR) AS prec_vta,
      CAST(r.prec_vta2 AS VARCHAR) AS prec_vta2,
      CAST(r.reng_neto AS VARCHAR) AS reng_neto,
      CAST(r.porc_desc AS VARCHAR) AS porc_desc,
      r.tipo_imp
    FROM pedidos p
    LEFT JOIN clientes c ON p.co_cli = c.co_cli
    LEFT JOIN zona z ON c.co_zon = z.co_zon
    LEFT JOIN vendedor v ON p.co_ven = v.co_ven
    LEFT JOIN reng_ped r ON p.fact_num = r.fact_num
    LEFT JOIN art a ON r.co_art = a.co_art
       LEFT JOIN condicio co ON p.forma_pag= co.co_cond
    ${whereClause}
    ORDER BY p.fact_num, r.reng_num
  `)) as RawPedidoRow[];

    return mapRawPedidos(result);
  }

  async UpdateRevisadoPedido(factNum: number, status: string) {
    const updateSttatus = status === 'Revisado' ? '1' : '0';

    const pedido = await this.sql.pedidos.findUnique({
      where: { fact_num: factNum },
    });

    if (!pedido) {
      throw new Error(`Pedido con número de factura ${factNum} no encontrado`);
    }

    const response = await this.sql.pedidos.update({
      where: { fact_num: factNum },
      data: { revisado: updateSttatus },
      include: { reng_ped: true },
    });

    return response; // return updated pedido
  }
}
