import { BadRequestException, Injectable } from '@nestjs/common';
import { DateUtils } from 'src/utils/date.utils';
import { SQLServerPrismaService } from '../../database/sqlserver.service';
import { AprobacionPedidoDto } from './dtos/aprobacion.pedido.dto';
import { PedidoFilterDto } from './dtos/pedidos-filters';
import { mapRawPedidos } from './helpers/mapRawPedidos';
import { RawPedidoRow } from './types/RawPedidoRow';


@Injectable()
export class OrdersService {
  constructor(private readonly sql: SQLServerPrismaService) { }
  async GetPedidos(role: string, codven: string) {
    const { start, end } = DateUtils.getCurrentMonthRange();

    const pedidos = await this.sql.pedidos.findMany({
      where: {
   
        anulada:false,
        fec_emis: {
          gte: start,
          lte: end,
        },
       
        ...((role === '5'|| role==='4') && codven ? { co_ven: codven } : {}),
        ...(role === '2' ? { co_ven: { not: '00001' } }:{}),
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
  
  async GetAprobacionPedidos(role?: string, codven?: string): Promise<AprobacionPedidoDto[]> {
    const conditions: string[] = [
      `p.status = 0`,
      `p.anulada = 0`,
      ...((role === '5' || role === '4') && codven ? [`p.co_ven LIKE '%${codven}%'`] : []),
      ...(role === '2'  ? [`p.co_ven NOT LIKE '%00001%'`] : []),
    ];

    const whereClause = `WHERE ${conditions.join(' AND ')}`;

    const result = await this.sql.$queryRawUnsafe(`
    SELECT
      p.fact_num,
      p.status AS estatus,
      p.comentario,
      CAST(p.saldo AS VARCHAR) AS saldo,
      CONVERT(VARCHAR, p.fec_emis, 120) AS fec_emis,
      CONVERT(VARCHAR, p.fec_venc, 120) AS fec_venc,
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
      p.tasag,
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
      r.tipo_imp,
      al.des_sub
    FROM pedidos p
    LEFT JOIN clientes c ON p.co_cli = c.co_cli
    LEFT JOIN zona z ON c.co_zon = z.co_zon
    LEFT JOIN vendedor v ON p.co_ven = v.co_ven
    LEFT JOIN reng_ped r ON p.fact_num = r.fact_num
    LEFT JOIN art a ON r.co_art = a.co_art
    LEFT JOIN condicio co ON p.forma_pag = co.co_cond
    LEFT JOIN almacenes al ON r.co_alma = al.co_sub
    ${whereClause}
    ORDER BY p.fact_num DESC
  `) as RawPedidoRow[];

    return mapRawPedidos(result);
  }


  async GetPedidosFilters(filters: PedidoFilterDto, role?: string, codven?: string): Promise<AprobacionPedidoDto[]> {
    const { dateIni, dateEnd, revisado, procesado, cancelled, vendor, zone } = filters;

    // Validacion de fechas
    if (dateIni && dateEnd && new Date(dateIni) > new Date(dateEnd)) {
      throw new BadRequestException('La fecha inicial no puede ser mayor que la final');
    }

    const { start, end } = DateUtils.getCurrentMonthRange();

    const conditions: string[] = [];


    // Filtro por fecha
    if (dateIni && dateEnd) {
      conditions.push(`p.fec_emis BETWEEN '${new Date(dateIni).toISOString()}' AND '${new Date(dateEnd).toISOString()}'`);
    } else {
      conditions.push(`YEAR(p.fec_emis) = YEAR(GETDATE()) AND MONTH(p.fec_emis) = MONTH(GETDATE())`);
    }

    // Filtro por revisado
    if (revisado && revisado !== 'TODOS') {
      conditions.push(`p.revisado = '${revisado}'`);
    }



    if (procesado) {
      conditions.push(`p.status = ${procesado}`);
    }
    
    // Filtro por anulada
    if (String(cancelled).toLowerCase() === "true") {
      conditions.push(`p.anulada = 1`);
  
    } else {
      conditions.push(`p.anulada = 0`);
    }
    // Filtro por vendedor
    if (vendor && vendor !== 'TODOS') {
      conditions.push(`v.ven_des = '${vendor}'`);
    }

    // Filtro por zona
    if (zone && zone !== 'TODOS') {
      conditions.push(`z.zon_des = '${zone}'`);
    }
    //filtro por rol y codigo de venbdedor
    if ((role === '5' || role==='4') && codven) {
      conditions.push(` p.co_ven = '${codven}'`)
    }
    if (role === '2') {
      conditions.push(` p.co_ven != '00001'`)
    }
   

    const whereClause = `WHERE ${conditions.join(' AND ')}`;

    //console.log(whereClause);

    const result = await this.sql.$queryRawUnsafe(`
    SELECT 
      p.fact_num,
      p.status AS estatus,
      p.comentario,
      CAST(p.saldo AS VARCHAR) AS saldo,
      CONVERT(VARCHAR, p.fec_emis, 120) AS fec_emis,
      CONVERT(VARCHAR, p.fec_venc, 120) AS fec_venc,
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
      p.tasag,
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
      --CASE WHEN p.moneda = 'BS' THEN r.prec_vta ELSE CAST(ROUND(r.prec_vta/p.tasa,2) AS DECIMAL(18,5)) END AS prec_vta,
      r.prec_vta,
      r.prec_vta2,
      CASE WHEN p.moneda = 'BS' THEN reng_neto ELSE CAST(ROUND(reng_neto/p.tasa,2) AS DECIMAL(18,5)) END AS reng_neto,
      porc_desc,
      r.tipo_imp,
      al.des_sub
    FROM pedidos p
    LEFT JOIN clientes c ON p.co_cli = c.co_cli
    LEFT JOIN zona z ON c.co_zon = z.co_zon
    LEFT JOIN vendedor v ON p.co_ven = v.co_ven
    LEFT JOIN reng_ped r ON p.fact_num = r.fact_num
    LEFT JOIN art a ON r.co_art = a.co_art
    LEFT JOIN condicio co ON p.forma_pag = co.co_cond
    LEFT JOIN almacenes al ON r.co_alma = al.co_sub
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
        `Estado inválido: '${status}'. Solo se permite '1' o ' '.`,
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
  async UpdateComment(factNum: number, newcomment: string) {

    const pedido = await this.sql.pedidos.findUnique({
      where: { fact_num: factNum },
    });

    if (!pedido) {
      throw new Error(`Pedido con número de factura ${factNum} no encontrado`);
    }
   
    const response = await this.sql.pedidos.update({
      where: { fact_num: factNum },
      data: { comentario: newcomment },
      //include: { reng_ped: true },
    });
    return response;
  
  }
}
