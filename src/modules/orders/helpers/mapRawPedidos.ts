import { plainToInstance } from 'class-transformer';
import { AprobacionPedidoDto } from '../dtos/aprobacion.pedido.dto';
import { RengPedDto } from '../dtos/reng_ped.dto';
import { RawPedidoRow } from '../types/RawPedidoRow';



export function mapRawPedidos(rows: RawPedidoRow[]): AprobacionPedidoDto[] {
  const pedidosMap = new Map<number, AprobacionPedidoDto>();

  for (const row of rows) {
    const renglon = plainToInstance(RengPedDto, {
      fact_num: row.fact_num,
      reng_num: row.reng_num,
      co_art: row.co_art,
      art_des: row.art_des,
      co_alma: row.co_alma,
      total_art: row.total_art,
      stotal_art: row.stotal_art,
      uni_venta: row.uni_venta,
      des_uni: row.des_uni,
      prec_vta: row.prec_vta,
      prec_vta2: row.prec_vta2,
      reng_neto: row.reng_neto,
      porc_desc: row.porc_desc,
      tipo_imp: row.tipo_imp,
    });

    if (!pedidosMap.has(row.fact_num)) {
      const pedido = plainToInstance(AprobacionPedidoDto, {
        fact_num: row.fact_num,
        estatus: row.estatus,
        comentario: row.comentario,
        saldo: row.saldo,
        fec_emis: row.fec_emis,
        fec_venc: row.fec_venc,
        co_cli: row.co_cli,
        cli_des: row.cli_des,
        credito: row.credito,
        co_ven: row.co_ven,
        ven_des: row.ven_des,
        dir_ent: row.dir_ent,
        forma_pag: row.forma_pag,
        cond_des: row.cond_des,
        revisado: row.revisado,
        tot_bruto: row.tot_bruto,
        tot_neto: row.tot_neto,
        glob_desc: row.glob_desc,
        iva: row.iva,
        impresa: row.impresa,
        aux02: row.aux02,
        tasa: row.tasa,
        moneda: row.moneda,
        anulada: row.anulada,
        co_zon: row.co_zon,
        zon_des: row.zon_des,
        reng_max: row.reng_num,
        reng_ped: [renglon],
      });

      pedidosMap.set(row.fact_num, pedido);
    } else {
      pedidosMap.get(row.fact_num)?.reng_ped.push(renglon);
    }
  }

  return Array.from(pedidosMap.values());
}
