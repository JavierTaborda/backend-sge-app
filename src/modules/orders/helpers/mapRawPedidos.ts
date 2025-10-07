import { plainToInstance } from 'class-transformer';
import { AprobacionPedidoDto } from '../dtos/aprobacion.pedido.dto';
import { RengPedDto } from '../dtos/reng_ped.dto';
import { RawPedidoRow } from '../types/RawPedidoRow';

// Funcion para aplicar descuentos

const CalculateDesc = (amount: number, desc: string): number => {
  if (!desc) return amount;

  const discounts = desc.trim().split('+').map(Number); //  [N, N] array split

  let finalAmount = amount;
  for (const d of discounts) {
    finalAmount -= finalAmount * (d / 100); // aplica cada descuento
  }
  return finalAmount;
};

// Función segura para convertir a número
const safeNumber = (value: any, defaultValue = 0): number => {
  if (value === null || value === undefined || value === '')
    return defaultValue;
  const num = Number(value);
  return isNaN(num) ? defaultValue : num;
};



// Función segura para fechas
const safeDate = (value: any, defaultValue = new Date()): Date => {
  const date = value ? new Date(value) : defaultValue;
  return isNaN(date.getTime()) ? defaultValue : date;
};

export function mapRawPedidos(rows: RawPedidoRow[]): AprobacionPedidoDto[] {
  const pedidosMap = new Map<number, AprobacionPedidoDto>();

  for (const row of rows) {
    //  safe number coinvierte de DECIMAL a Number
    const renglon = plainToInstance(RengPedDto, {
      fact_num: safeNumber(row.fact_num),
      reng_num: safeNumber(row.reng_num),
      co_art: row.co_art,
      art_des: row.art_des,
      co_alma: row.co_alma,
      total_art: safeNumber(row.total_art),
      stotal_art: safeNumber(row.stotal_art),
      uni_venta: row.uni_venta,
      porc_desc: row.porc_desc,
      prec_vta: safeNumber(row.prec_vta),
      prec_vta2: safeNumber(row.prec_vta2),
      reng_neto: safeNumber(row.reng_neto),
      tipo_imp: row.tipo_imp,
      prec_vta_desc: CalculateDesc(row.prec_vta2, row.porc_desc),
      des_sub: row.des_sub,
    });


    const iva = safeNumber(row.tasag, 1) / 100;
 

    renglon.prec_vta *= (1 + iva); // Pice BS
    renglon.prec_vta2 *= (1 + iva); // Price US$
    renglon.prec_vta_desc *= (1 + iva); // Price +Discount US$
    renglon.reng_neto *= (1 + iva); // Total
    
    const factNum = safeNumber(row.fact_num);

    if (!pedidosMap.has(factNum)) {
      const pedido = plainToInstance(AprobacionPedidoDto, {
        fact_num: factNum,
        estatus: row.estatus,
        comentario: row.comentario,
        saldo: safeNumber(row.saldo),
        fec_emis: safeDate(row.fec_emis),
        fec_venc: safeDate(row.fec_venc),
        co_cli: row.co_cli,
        cli_des: row.cli_des,
        credito: safeNumber(row.credito),
        co_ven: row.co_ven,
        ven_des: row.ven_des,
        dir_ent: row.dir_ent,
        forma_pag: row.forma_pag,
        cond_des: row.cond_des,
        revisado: row.revisado,
        tot_bruto: safeNumber(row.tot_bruto),
        tot_neto: safeNumber(row.tot_neto),
        iva: safeNumber(row.iva),
        aux02: row.aux02,
        tasa: safeNumber(row.tasa),
        tasag: safeNumber(row.tasag),
        moneda: row.moneda,
        anulada: Boolean(row.anulada),
        co_zon: row.co_zon,
        zon_des: row.zon_des,
        reng_max: safeNumber(row.reng_num),
        reng_ped: [renglon],
      });
      
      pedidosMap.set(factNum, pedido);
    } else {
      pedidosMap.get(factNum)?.reng_ped.push(renglon);
    }
  }

  return Array.from(pedidosMap.values());
}