import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

const toStringValue = ({ value }: { value: unknown }) =>
  value === null || value === undefined ? '' : String(value).trim();

export class CreateMovementDto {
  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  solicitudnumero: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  itemnumero: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  codart: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  coduni: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  codalma: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  desalma: string;

  @Type(() => Number)
  @IsNumber()
  stock: number;

  @Type(() => Number)
  @IsNumber()
  prioridad: number;

  @Transform(toStringValue)
  @IsString()
  almacen: string;

  @Type(() => Number)
  @IsNumber()
  cantidad: number;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  traslado: string;

  @Transform(toStringValue)
  @IsString()
  tras_num: string;

  @Type(() => Number)
  @IsNumber()
  costo: number;

  @Transform(toStringValue)
  @IsString()
  fechacosto: string;
}