import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
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

  @IsNumber()
  saldo: number;

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

  @IsNumber()
  tot_bruto: number;

  @IsNumber()
  tot_neto: number;

  @IsNumber()
  iva: number;

  @IsString()
  aux02: string;

  @IsNumber()
  tasa: number;

  @IsNumber()
  tasag: number;

  @IsString()
  moneda: string;

  @IsBoolean()
  anulada: boolean;

  @IsString()
  co_zon: string;

  @IsString()
  zon_des: string;

  @IsArray()
  @Type(() => RengPedDto)
  reng_ped: RengPedDto[];
}