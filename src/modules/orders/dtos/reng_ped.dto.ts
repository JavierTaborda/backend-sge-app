import { IsNumber, IsOptional, IsString } from 'class-validator';

export class RengPedDto {
  @IsNumber()
  fact_num: number;

  @IsNumber()
  reng_num: number;

  @IsString()
  co_art: string;

  @IsString()
  art_des: string;

  @IsString()
  co_alma: string;

  @IsNumber()
  total_art: number;

  @IsNumber()
  stotal_art: number;

  @IsString()
  uni_venta: string;

  @IsNumber()
  prec_vta: number;

  @IsNumber()
  prec_vta2: number;

  @IsNumber()
  reng_neto: number;

  @IsString()
  porc_desc: string;

  @IsString()
  tipo_imp: string;

  @IsNumber()
  prec_vta_desc: number;

  @IsOptional()
  @IsString()
  des_sub: string;
}