import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHeaderDto {
  @IsString()
  @IsNotEmpty()
  solicitudnumero: string;

  @IsString()
  @IsNotEmpty()
  empresa: string;

  @IsString()
  @IsNotEmpty()
  codigoobra: string;

  @IsString()
  @IsNotEmpty()
  descripcionobra: string;

  @IsString()
  @IsNotEmpty()
  numerocontrol: string;

  @IsString()
  @IsNotEmpty()
  solicitanteuser: string;

  @IsString()
  @IsNotEmpty()
  solicitantecodigo: string;

  @IsString()
  @IsNotEmpty()
  fechasolicitud: string;

  @IsString()
  @IsNotEmpty()
  fechautilizacion: string;

  @IsString()
  observacion: string;

  @IsString()
  actividad: string;

  @IsString()
  direccionentrega: string;

  @IsString()
  @IsNotEmpty()
  registradopor: string;

  @IsString()
  @IsNotEmpty()
  owneruser: string;
}
