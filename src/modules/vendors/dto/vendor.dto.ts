import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class VendorDto {
  @IsString()
  codven: string;

  @IsString()
  vendes: string;

  @IsOptional()
  @IsString()
  cedula?: string;

  @IsOptional()
  @IsString()
  telefono1?: string;

  @IsOptional()
  @IsString()
  telefono2?: string;

  @IsOptional()
  @IsString()
  codzon?: string;

  @IsBoolean()
  vende: boolean;

  @IsBoolean()
  cobra: boolean;

  @IsBoolean()
  activo: boolean;
}
