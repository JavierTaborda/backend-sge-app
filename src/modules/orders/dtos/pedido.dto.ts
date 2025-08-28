// src/modules/orders/dto/pedido.dto.ts
import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsDate,
} from 'class-validator';
import { Decimal } from '../../../../prisma-clients/sqlserver/runtime/library';
import { RengPedDto } from './reng_ped.dto';

export class PedidoDto {
  @IsNumber()
  fact_num: number;

  @IsOptional()
  @IsBoolean()
  contrib?: boolean | null;

  @IsOptional()
  @IsString()
  nombre?: string | null;

  @IsOptional()
  @IsString()
  rif?: string | null;



  @IsOptional()
  @IsString()
  status?: string | null;

  @IsOptional()
  @IsString()
  comentario?: string | null;

  @IsOptional()
  @IsString()
  descrip?: string | null;

  @IsOptional()
  tot_bruto?: Decimal | null;

  @IsOptional()
  tot_neto?: Decimal | null;

  @IsOptional()
  tot_reca?: Decimal | null;

  @IsOptional()
  fec_emis?: Date | null;

  @IsOptional()
  co_cli?: string | null;

  @IsOptional()
  co_ven?: string | null;

  @IsOptional()
  @IsBoolean()
  valido?: boolean | null;

  @IsOptional()
  reng_ped?: RengPedDto[] | null;
}
