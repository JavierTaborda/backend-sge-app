import { BadRequestException, Injectable } from '@nestjs/common';
import { DateUtils } from 'src/utils/date.utils';
import { SQLServerPrismaService } from '../../database/sqlserver.service';
import { AprobacionPedidoDto } from './dtos/aprobacion.pedido.dto';
import { PedidoFilterDto } from './dtos/pedidos-filters';
import { mapRawPedidos } from './helpers/mapRawPedidos';
import { RawPedidoRow } from './types/RawPedidoRow';


@Injectable()
export class OrdersService {
  constructor(private readonly sql: SQLServerPrismaService) {}
  async GetPedidos() {
    const { start, end } = DateUtils.getCurrentMonthRange();

    const pedidos = await this.sql.pedidos.findMany({
      where: {
        revisado: '1',
        aux02: 'Si',

        fec_emis: {
          gte: start,
          lte: end,
        },
      },
      include: { reng_ped: true },
    });

    
    const pedidosModificados = pedidos.map((pedido) => {
      const totNetoOriginal = pedido.tot_neto?.toString() ?? '0';
      const tasa = pedido.tasa?.toString() ?? '1';

      const nuevoTotNeto = parseFloat(totNetoOriginal) / parseFloat(tasa);

      return {
        ...pedido,
        tot_neto: nuevoTotNeto, 
      };
    });

    return pedidosModificados;
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
      CASE WHEN p.moneda = 'BS' THEN p.tot_bruto ELSE ROUND(p.tot_bruto/p.tasa,2) END AS tot_bruto,
      CASE WHEN p.moneda = 'BS' THEN p.tot_neto ELSE ROUND(p.tot_neto/p.tasa,2) END AS tot_neto,
      CASE WHEN p.moneda = 'BS' THEN p.iva ELSE ROUND(p.iva/p.tasa,2) END AS iva,
      p.aux02,
      p.tasa,
      p.moneda,
      p.anulada,
      c.co_zon,
      z.zon_des,
      r.reng_num,
      r.co_art,
      a.art_des,
      r.co_alma,
      total_art,
      stotal_art,
      pendiente,
      r.uni_venta,
      CASE WHEN p.moneda = 'BS' THEN r.prec_vta ELSE CAST(ROUND(r.prec_vta/p.tasa,2) AS DECIMAL(18,5)) END AS prec_vta,
      r.prec_vta2,
      CASE WHEN p.moneda = 'BS' THEN reng_neto ELSE CAST(ROUND(reng_neto/p.tasa,2) AS DECIMAL(18,5)) END AS reng_neto,
      porc_desc,
      r.tipo_imp

    FROM pedidos p
    LEFT JOIN clientes c ON p.co_cli = c.co_cli
    LEFT JOIN zona z ON c.co_zon = z.co_zon
    LEFT JOIN vendedor v ON p.co_ven = v.co_ven
    LEFT JOIN reng_ped r ON p.fact_num = r.fact_num
    LEFT JOIN art a ON r.co_art = a.co_art
    LEFT JOIN condicio co ON p.forma_pag= co.co_cond
    WHERE p.status = 0 
    AND p.anulada = 0 
    AND p.aux02 = ''  
    ORDER BY p.fact_num DESC
  `)) as RawPedidoRow[];

    return mapRawPedidos(result);
  }
  

  async GetPedidosFilters(filters: PedidoFilterDto): Promise<AprobacionPedidoDto[]> {
    const { dateIni, dateEnd, estatus, cancelled, vendor, zone } = filters;

    // Validación de fechas
    if (dateIni && dateEnd && new Date(dateIni) > new Date(dateEnd)) {
      throw new BadRequestException('La fecha inicial no puede ser mayor que la final');
    }

    const { start, end } = DateUtils.getCurrentMonthRange();
    const conditions: string[] = [];

    // Filtro por fecha
    if (dateIni && dateEnd) {
      conditions.push(`p.fec_emis BETWEEN '${new Date(dateIni).toISOString()}' AND '${new Date(dateEnd).toISOString()}'`);
    } else {
      conditions.push(`p.fec_emis BETWEEN '${start.toISOString()}' AND '${end.toISOString()}'`);
    }

    // Filtro por estatus
    if (estatus) {
      conditions.push(`p.revisado = '${estatus}'`);
    }
    // else
    // {
    //   conditions.push(` p.revisado = 1 AND p.aux02 !=''`);
    // }

    // Filtro por anulada

    if (cancelled) {
      conditions.push(`p.anulada = 1`);
    } else {
      conditions.push(`p.anulada = 0`);
    }

    // Filtro por vendedor
    if (vendor) {
      conditions.push(`v.ven_des = '${vendor}'`);
    }

    // Filtro por zona
    if (zone) {
      conditions.push(`z.zon_des = '${zone}'`);
    }

    const whereClause = `WHERE ${conditions.join(' AND ')}`;

    //console.log(whereClause);

    const result = await this.sql.$queryRawUnsafe(`
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
      CASE WHEN p.moneda = 'BS' THEN p.tot_bruto ELSE ROUND(p.tot_bruto/p.tasa,2) END AS tot_bruto,
      CASE WHEN p.moneda = 'BS' THEN p.tot_neto ELSE ROUND(p.tot_neto/p.tasa,2) END AS tot_neto,
      CASE WHEN p.moneda = 'BS' THEN p.iva ELSE ROUND(p.iva/p.tasa,2) END AS iva,
      p.aux02,
      p.tasa,
      p.moneda,
      p.anulada,
      c.co_zon,
      z.zon_des,
      r.reng_num,
      r.co_art,
      a.art_des,
      r.co_alma,
      total_art,
      stotal_art,
      pendiente,
      r.uni_venta,
      CASE WHEN p.moneda = 'BS' THEN r.prec_vta ELSE CAST(ROUND(r.prec_vta/p.tasa,2) AS DECIMAL(18,5)) END AS prec_vta,
      r.prec_vta2,
      CASE WHEN p.moneda = 'BS' THEN reng_neto ELSE CAST(ROUND(reng_neto/p.tasa,2) AS DECIMAL(18,5)) END AS reng_neto,
      porc_desc,
      r.tipo_imp
    FROM pedidos p
    LEFT JOIN clientes c ON p.co_cli = c.co_cli
    LEFT JOIN zona z ON c.co_zon = z.co_zon
    LEFT JOIN vendedor v ON p.co_ven = v.co_ven
    LEFT JOIN reng_ped r ON p.fact_num = r.fact_num
    LEFT JOIN art a ON r.co_art = a.co_art
    LEFT JOIN condicio co ON p.forma_pag = co.co_cond
    ${whereClause}
    ORDER BY p.fact_num DESC, r.reng_num
  `) as RawPedidoRow[];


    return mapRawPedidos(result);
  }

  async GetRengProductos(factNum: number) {
    return this.sql.reng_ped.findMany({
      where: {
        fact_num: factNum,
      },
    });
  }

  async UpdateRevisadoPedido(factNum: number, status: string) {
    if (status !== '1' && status !== ' ') {
      throw new Error(
        `Estado inválido: '${status}'. Solo se permite '1' o ' ' (espacio).`,
      );
    }

    const pedido = await this.sql.pedidos.findUnique({
      where: { fact_num: factNum },
    });

    if (!pedido) {
      throw new Error(`Pedido con número de factura ${factNum} no encontrado`);
    }

    const response = await this.sql.pedidos.update({
      where: { fact_num: factNum },
      data: { revisado: status },
      include: { reng_ped: true },
    });

    return response;
  }
}
