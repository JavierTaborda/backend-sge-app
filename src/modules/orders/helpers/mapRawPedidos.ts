import { plainToInstance } from 'class-transformer';
import { AprobacionPedidoDto } from '../dtos/aprobacion.pedido.dto';
import { RengPedDto } from '../dtos/reng_ped.dto';
import { RawPedidoRow } from '../types/RawPedidoRow';

// Funcion para aplicar descuentos
const CalculateDesc  = (amount: number, desc: string): number => {
  if (!desc) return amount;

  const discounts = desc.split('+').map(Number); //  [N, N]

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

// Función segura para convertir a string
const safeString = (value: any, defaultValue = ''): string => {
  if (value === null || value === undefined) return defaultValue;
  return String(value);
};


// Función segura para fechas
const safeDate = (value: any, defaultValue = new Date()): Date => {
  const date = value ? new Date(value) : defaultValue;
  return isNaN(date.getTime()) ? defaultValue : date;
};

export function mapRawPedidos(rows: RawPedidoRow[]): AprobacionPedidoDto[] {
  const pedidosMap = new Map<number, AprobacionPedidoDto>();

  for (const row of rows) {
    // Convertimos cada renglon de manera segura
    const renglon = plainToInstance(RengPedDto, {
      fact_num: safeNumber(row.fact_num),
      reng_num: safeNumber(row.reng_num),
      co_art: safeString(row.co_art),
      art_des: safeString(row.art_des),
      co_alma: safeString(row.co_alma),
      total_art: safeString(row.total_art, '0'),
      stotal_art: safeString(row.stotal_art, '0'),
      uni_venta: safeString(row.uni_venta),
      porc_desc: row.porc_desc,
      prec_vta: safeString(row.prec_vta, '0'),
      prec_vta2: safeString(row.prec_vta2, '0'),
      reng_neto: safeString(row.reng_neto, '0'),
      tipo_imp: safeString(row.tipo_imp),
      prec_vta_desc: CalculateDesc( Number(row.prec_vta2), row.porc_desc)

    });

    if (!pedidosMap.has(safeNumber(row.fact_num))) {
      const pedido = plainToInstance(AprobacionPedidoDto, {
        fact_num: safeNumber(row.fact_num),
        estatus: safeString(row.estatus),
        comentario: safeString(row.comentario),
        saldo: safeString(row.saldo, '0'),
        fec_emis: safeDate(row.fec_emis),
        fec_venc: safeDate(row.fec_venc),
        co_cli: safeString(row.co_cli),
        cli_des: safeString(row.cli_des),
        credito: safeNumber(row.credito),
        co_ven: safeString(row.co_ven),
        ven_des: safeString(row.ven_des),
        dir_ent: safeString(row.dir_ent),
        forma_pag: safeString(row.forma_pag),
        cond_des: safeString(row.cond_des),
        revisado: safeString(row.revisado),
        tot_bruto: safeNumber(row.tot_bruto, 0),
        tot_neto: safeNumber(row.tot_neto, 0),
        iva: safeNumber(row.iva, 0),
      
        aux02: safeString(row.aux02),
        tasa: safeString(row.tasa, '1'),
        moneda: safeString(row.moneda, 'US$'),
        anulada: safeNumber(row.anulada),
        co_zon: safeString(row.co_zon),
        zon_des: safeString(row.zon_des),
        reng_max: safeNumber(row.reng_num),
        reng_ped: [renglon],
      });

      pedidosMap.set(safeNumber(row.fact_num), pedido);
    } else {
      pedidosMap.get(safeNumber(row.fact_num))?.reng_ped.push(renglon);
    }
  }

  return Array.from(pedidosMap.values());
}
