import {
    IsBoolean,
    IsDateString,
    IsNumber,
    IsOptional,
    IsString
} from 'class-validator';

export class RenglonPedidoDTO {
    @IsNumber()
    fact_num: number;

    @IsNumber()
    reng_num: number;

    @IsOptional()
    @IsString()
    co_art?: string;

    @IsOptional()
    @IsString()
    co_alma?: string;

    @IsOptional()
    @IsNumber()
    total_art?: number;

    @IsOptional()
    @IsNumber()
    pendiente?: number;

    @IsOptional()
    @IsString()
    uni_venta?: string;

    @IsOptional()
    @IsNumber()
    prec_vta?: number;

    @IsOptional()
    @IsNumber()
    prec_vta2?: number;

    @IsOptional()
    @IsNumber()
    reng_neto?: number;

    @IsOptional()
    @IsString()
    porc_desc?: string;

    @IsOptional()
    @IsString()
    tipo_imp?: string;

    @IsOptional()
    @IsString()
    cos_pro_un?: number;

    @IsOptional()
    @IsString() 
    ult_cos_un?: number;

    @IsOptional()
    @IsString() 
    ult_cos_om?: number;

    @IsOptional()
    @IsString() 
    cos_pro_om?: number;
    
    @IsOptional()
    @IsDateString()
    fec_lote?: string;

    @IsOptional()
    @IsBoolean()
    valido?: boolean;
}