import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDetailDto {
  @IsString()
  @IsNotEmpty()
  solicitudnumero: string;

  @IsString()
  @IsNotEmpty()
  itemnumero: string;

  @IsString()
  @IsNotEmpty()
  codigomaterial: string;

  @IsString()
  @IsNotEmpty()
  descripcionmaterial: string;

  @IsString()
  @IsNotEmpty()
  coduni: string;

  @IsString()
  @IsNotEmpty()
  unidadmedida: string;

  @IsString()
  @IsNotEmpty()
  linea: string;

  @IsString()
  @IsNotEmpty()
  sublinea: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsNumber()
  cantidadsolicitada: number;

  @IsNumber()
  precioventa: number;

  @IsString()
  observacion: string;

  @IsString()
  @IsNotEmpty()
  materialnuevo: string;
}
