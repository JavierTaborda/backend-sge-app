v  crk//import { Transform, Type } from 'class-transformer';
import { Allow, IsNotEmpty, IsNumber, IsString } from 'class-validator';

const toStringValue = ({ value }: { value: unknown }) =>
  value === null || value === undefined ? '' : String(value).trim();

export class CreateDetailDto {
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
  codigomaterial: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  descripcionmaterial: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  coduni: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  unidadmedida: string;

  @Transform(toStringValue)
  @IsString()
  linea: string;

  @Transform(toStringValue)
  @IsString()
  sublinea: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  categoria: string;

  @Type(() => Number)
  @IsNumber()
  cantidadsolicitada: number;

  @Type(() => Number)
  @IsNumber()
  precioventa: number;

  @Transform(toStringValue)
  @IsString()
  observacion: string;

  @Transform(toStringValue)
  @IsString()
  materialnuevo: string;

  @Allow()
  autorizado?: unknown;

  @Allow()
  fechaautorizado?: unknown;

  @Allow()
  autorizadopor?: unknown;

  @Allow()
  cantidadautorizada?: unknown;

  @Allow()
  cantidaddespacho?: unknown;

  @Allow()
  cantidaddisponible?: unknown;

  @Allow()
  almacendespacho?: unknown;

  @Allow()
  cantidadcompra?: unknown;

  @Allow()
  comprar?: unknown;
}
