import { Transform } from 'class-transformer';
import { Allow, IsNotEmpty, IsString } from 'class-validator';

const toStringValue = ({ value }: { value: unknown }) =>
  value === null || value === undefined ? '' : String(value).trim();

export class CreateHeaderDto {
  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  solicitudnumero: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  empresa: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  codigoobra: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  descripcionobra: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  numerocontrol: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  solicitanteuser: string;

  @Transform(toStringValue)
  @IsString()
  solicitantecodigo: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  fechasolicitud: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  fechautilizacion: string;

  @Transform(toStringValue)
  @IsString()
  observacion: string;

  @Transform(toStringValue)
  @IsString()
  actividad: string;

  @Transform(toStringValue)
  @IsString()
  direccionentrega: string;

  @Transform(toStringValue)
  @IsString()
  @IsNotEmpty()
  registradopor: string;

  @Transform(toStringValue)
  @IsString()
  owneruser: string;

  @Allow()
  autorizado?: unknown;

  @Allow()
  fechaautorizado?: unknown;

  @Allow()
  autorizadopor?: unknown;

  @Allow()
  anulado?: unknown;

  @Allow()
  motivoanulado?: unknown;

  @Allow()
  fechaanulado?: unknown;

  @Allow()
  anuladopor?: unknown;

  @Allow()
  despachar?: unknown;

  @Allow()
  fechadespachar?: unknown;

  @Allow()
  despacharpor?: unknown;

  @Allow()
  comentadespachar?: unknown;

  @Allow()
  pedido?: unknown;

  @Allow()
  ped_num?: unknown;

  @Allow()
  fec_emis_ped?: unknown;

  @Allow()
  co_us_ped?: unknown;

  @Allow()
  comprar?: unknown;

  @Allow()
  fechacomprar?: unknown;

  @Allow()
  comprarpor?: unknown;

  @Allow()
  comentacomprar?: unknown;

  @Allow()
  compra?: unknown;

  @Allow()
  comp_num?: unknown;

  @Allow()
  fec_emis_comp?: unknown;

  @Allow()
  co_us_comp?: unknown;
}
