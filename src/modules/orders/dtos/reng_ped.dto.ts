
import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { Decimal } from '../../../../prisma-clients/sqlserver/runtime/library';

export class RengPedDto {
  @IsNumber()
  fact_num: number;

  @IsNumber()
  reng_num: number;

  @IsOptional()
  @IsString()
  tipo_doc?: string | null;

  @IsOptional()
  @IsNumber()
  reng_doc?: number | null;

  @IsOptional()
  @IsNumber()
  num_doc?: number | null;

  @IsOptional()
  @IsString()
  co_art?: string | null;

  @IsOptional()
  @IsString()
  co_alma?: string | null;

  @IsOptional()
  total_art?: Decimal | null;

  @IsOptional()
  stotal_art?: Decimal | null;

  @IsOptional()
  pendiente?: Decimal | null;

  @IsOptional()
  @IsString()
  uni_venta?: string | null;

  @IsOptional()
  prec_vta?: Decimal | null;

  @IsOptional()
  @IsString()
  porc_desc?: string | null;

  @IsOptional()
  @IsString()
  tipo_imp?: string | null;

  @IsOptional()
  reng_neto?: Decimal | null;

  @IsOptional()
  cos_pro_un?: Decimal | null;

  @IsOptional()
  ult_cos_un?: Decimal | null;

  @IsOptional()
  ult_cos_om?: Decimal | null;

  @IsOptional()
  cos_pro_om?: Decimal | null;

  @IsOptional()
  total_dev?: Decimal | null;

  @IsOptional()
  monto_dev?: Decimal | null;

  @IsOptional()
  prec_vta2?: Decimal | null;

  @IsOptional()
  anulado?: boolean | null;

  @IsOptional()
  @IsString()
  des_art?: string | null;

  @IsOptional()
  seleccion?: boolean | null;

  @IsOptional()
  cant_imp?: Decimal | null;

  @IsOptional()
  @IsString()
  comentario?: string | null;

  @IsOptional()
  total_uni?: Decimal | null;

  @IsOptional()
  mon_ilc?: Decimal | null;

  @IsOptional()
  otros?: Decimal | null;

  @IsOptional()
  @IsString()
  nro_lote?: string | null;

  @IsOptional()
  fec_lote?: Date | null;

  @IsOptional()
  pendiente2?: Decimal | null;

  @IsOptional()
  @IsString()
  tipo_doc2?: string | null;

  @IsOptional()
  reng_doc2?: number | null;

  @IsOptional()
  num_doc2?: number | null;

  @IsOptional()
  @IsString()
  serialp?: string | null;

  @IsOptional()
  @IsString()
  co_alma2?: string | null;

  @IsOptional()
  @IsString()
  dis_cen?: string | null;

  @IsOptional()
  aux01?: Decimal | null;

  @IsOptional()
  @IsString()
  aux02?: string | null;

  @IsOptional()
  cant_prod?: Decimal | null;

  @IsOptional()
  imp_prod?: Decimal | null;
}
