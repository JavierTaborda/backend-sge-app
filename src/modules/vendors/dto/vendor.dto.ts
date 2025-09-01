import { IsOptional, IsString } from 'class-validator';

export class VendorDto {
  @IsString()
  cod_ven: string;

  @IsOptional()
  @IsString()
  ven_des?: string;

  // @IsOptional()
  // @IsString()
  // tipo?: string;

  // @IsOptional()
  // @IsString()
  // cedula?: string;

  // @IsOptional()
  // @IsString()
  // direc1?: string;

  // @IsOptional()
  // @IsString()
  // direc2?: string;

  // @IsOptional()
  // @IsString()
  // telefonos?: string;

  // @IsOptional()
  // @IsBoolean()
  // condic?: boolean;

  // @IsOptional()
  // @IsNumber()
  // comision?: number;

  // @IsOptional()
  // @IsBoolean()
  // fun_cob?: boolean;

  // @IsOptional()
  // @IsBoolean()
  // fun_ven?: boolean;

  // @IsOptional()
  // @IsNumber()
  // comisionv?: number;

  // @IsOptional()
  // @IsNumber()
  // fac_ult_ve?: number;

  // @IsOptional()
  // @IsNumber()
  // net_ult_ve?: number;

  // @IsOptional()
  // @IsString()
  // cli_ult_ve?: string;

  // @IsOptional()
  // @IsString()
  // cta_contab?: string;

  // @IsOptional()
  // @IsString()
  // email?: string;

  // @IsOptional()
  // @IsString()
  // login?: string;

  // @IsOptional()
  // @IsString()
  // password?: string;

  // @IsOptional()
  // @IsString()
  // codzon?: string;

  // @IsOptional()
  // @IsString()
  // zon_des?: string;
}
