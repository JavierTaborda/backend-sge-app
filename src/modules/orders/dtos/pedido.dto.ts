// src/modules/orders/dto/order.dto.ts
import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsDate,
} from 'class-validator';


export class PedidoDto {
  @IsNumber()
  fact_num: number;

  @IsOptional()
  @IsBoolean()
  contrib?: boolean;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  rif?: string;

  @IsOptional()
  @IsString()
  nit?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  comentario?: string;

  @IsOptional()
  @IsString()
  descrip?: string;

  @IsOptional()
  tot_bruto?: number;

  @IsOptional()
  tot_neto?: number;

  @IsOptional()
  glob_desc?: number;

  @IsOptional()
  tot_reca?: number;

  @IsOptional()
  @IsString()
  porc_gdesc?: string;

  @IsOptional()
  @IsString()
  porc_reca?: string;

  @IsOptional()
  total_uc?: number;

  @IsOptional()
  total_cp?: number;

  @IsOptional()
  tot_flete?: number;

  @IsOptional()
  monto_dev?: number;

  @IsOptional()
  totklu?: number;

  @IsOptional()
  @IsBoolean()
  anulada?: boolean;

  @IsOptional()
  @IsBoolean()
  impresa?: boolean;

  @IsOptional()
  iva?: number;

  @IsOptional()
  iva_dev?: number;

  @IsOptional()
  @IsDate()
  fec_emis?: Date;

  @IsOptional()
  @IsDate()
  fec_venc?: Date;

  @IsOptional()
  @IsString()
  co_cli?: string;

  @IsOptional()
  @IsString()
  co_ven?: string;

  @IsOptional()
  @IsString()
  co_tran?: string;

  @IsOptional()
  @IsString()
  dir_ent?: string;

  @IsOptional()
  @IsString()
  forma_pag?: string;

  @IsOptional()
  tasa?: number;

  @IsOptional()
  @IsString()
  moneda?: string;

  @IsOptional()
  @IsString()
  cta_contab?: string;

  @IsOptional()
  seriales?: number;

  @IsOptional()
  tasag?: number;

  @IsOptional()
  tasag10?: number;

  @IsOptional()
  tasag20?: number;

  @IsOptional()
  @IsString()
  campo1?: string;

  @IsOptional()
  @IsString()
  campo2?: string;

  @IsOptional()
  @IsString()
  campo3?: string;

  @IsOptional()
  @IsString()
  campo4?: string;

  @IsOptional()
  @IsString()
  campo5?: string;

  @IsOptional()
  @IsString()
  campo6?: string;

  @IsOptional()
  @IsString()
  campo7?: string;

  @IsOptional()
  @IsString()
  campo8?: string;

  @IsOptional()
  @IsString()
  co_us_in?: string;

  @IsOptional()
  @IsDate()
  fe_us_in?: Date;

  @IsOptional()
  @IsString()
  co_us_mo?: string;

  @IsOptional()
  @IsDate()
  fe_us_mo?: Date;

  @IsOptional()
  @IsString()
  co_us_el?: string;

  @IsOptional()
  @IsDate()
  fe_us_el?: Date;

  @IsOptional()
  @IsString()
  revisado?: string;

  @IsOptional()
  @IsString()
  trasnfe?: string;

  @IsOptional()
  @IsString()
  co_sucu?: string;

  @IsOptional()
  @IsString()
  rowguid?: string;

  @IsOptional()
  mon_ilc?: number;

  @IsOptional()
  otros1?: number;

  @IsOptional()
  otros2?: number;

  @IsOptional()
  otros3?: number;

  @IsOptional()
  @IsString()
  serialp?: string;

  @IsOptional()
  @IsBoolean()
  valido?: boolean;

  @IsOptional()
  @IsString()
  dis_cen?: string;

  @IsOptional()
  aux01?: number;

  @IsOptional()
  @IsString()
  aux02?: string;

  @IsOptional()
  ID?: number;

  @IsOptional()
  @IsString()
  salestax?: string;

  @IsOptional()
  @IsString()
  origen?: string;

  @IsOptional()
  @IsString()
  origen_d?: string;

  @IsOptional()
  @IsString()
  sta_prod?: string;

  @IsOptional()
  @IsString()
  telefono?: string;
}
