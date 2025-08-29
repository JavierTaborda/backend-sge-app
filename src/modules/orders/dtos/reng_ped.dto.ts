import { IsNumber, IsString } from 'class-validator';

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

  // @IsString()
  // alma_des: string;

  @IsString()
  total_art: string;

  @IsString()
  stotal_art: string;

  // @IsString()
  // pendiente: string;

  @IsString()
  uni_venta: string;

  // @IsString()
  // des_uni: string;

  @IsString()
  prec_vta: string;

  @IsString()
  prec_vta2: string;

  @IsString()
  reng_neto: string;

  @IsString()
  porc_desc: string;

  @IsString()
  tipo_imp: string;


}
