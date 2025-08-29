import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNumber,
  IsString
} from 'class-validator';
import { RengPedDto } from './reng_ped.dto';

export class AprobacionPedidoDto {
  @IsNumber()
  fact_num: number;

  @IsString()
  estatus: string;

  @IsString()
  comentario: string;

  @IsString()
  saldo: string;

  @IsDate()
  @Type(() => Date)
  fec_emis: Date;

  @IsDate()
  @Type(() => Date)
  fec_venc: Date;

  @IsString()
  co_cli: string;

  @IsString()
  cli_des: string;

  @IsNumber()
  credito: number;

  @IsString()
  co_ven: string;

  @IsString()
  ven_des: string;


  @IsString()
  dir_ent: string;

  @IsString()
  forma_pag: string;

  @IsString()
  cond_des: string;

  @IsString()
  revisado: string;

  @IsString()
  tot_bruto: string;

  @IsString()
  tot_neto: string;

  @IsString()
  glob_desc: string;

  @IsString()
  iva: string;

  @IsNumber()
  impresa: number;

  @IsString()
  aux02: string;

  @IsString()
  tasa: string;

  @IsString()
  moneda: string;

  @IsNumber()
  anulada: number;

  @IsString()
  co_zon: string;

  @IsString()
  zon_des: string;

  @IsNumber()
  reng_max: number;

  @IsArray()
  @Type(() => RengPedDto)
  reng_ped: RengPedDto[];
}
