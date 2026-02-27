import { Type } from 'class-transformer';
import {
    IsArray,
    IsBoolean,
    IsDateString,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested
} from 'class-validator';
import { RenglonPedidoDTO } from './reglon-pedido.dto';

export class PedidoDTO {
    @IsNumber()
    fact_num: number;

    @IsOptional()
    @IsBoolean()
    contrib?: boolean;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    rif?: string;

    @IsOptional()
    @IsString()
    status?: string;

    @IsOptional()
    @IsString()
    comentario?: string;

    @IsOptional()
    @IsString()
    descrip?: string;

    @IsOptional()
    @IsString()
    revisado?: string;

    @IsOptional()
    @IsNumber()
    saldo?: number;

    @IsOptional()
    @IsDateString()
    fec_emis?: string;

    @IsOptional()
    @IsDateString()
    fec_venc?: string;

    @IsOptional()
    @IsString()
    co_cli?: string;

    @IsOptional()
    @IsString()
    co_ven?: string;

    @IsOptional()
    @IsString()
    co_tran?: string;

    @IsOptional()
    @IsString()
    dir_ent?: string;

    @IsOptional()
    @IsString()
    forma_pag?: string;

    @IsOptional()
    @IsNumber()
    tot_bruto?: number;

    @IsOptional()
    @IsNumber()
    tot_neto?: number;

    @IsOptional()
    @IsNumber()
    glob_desc?: number;

    @IsOptional()
    @IsNumber()
    tot_reca?: number;

    @IsOptional()
    @IsString()
    porc_gdesc?: string;

    @IsOptional()
    @IsString()
    porc_reca?: string;

    @IsOptional()
    @IsNumber()
    iva?: number;

    @IsOptional()
    @IsNumber()
    tasa?: number;

    @IsOptional()
    @IsString()
    moneda?: string;

    @IsOptional()
    @IsNumber()
    tasag?: number;

    @IsOptional()
    @IsString()
    telefono?: string;

    @IsOptional()
    @IsString()
    serialp?: string;

    // Relation
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RenglonPedidoDTO)
    reng_ped: RenglonPedidoDTO[];
}