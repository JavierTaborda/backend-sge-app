
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class PedidoFilterDto {
    @IsOptional()
    @IsDateString()
    dateIni?: string;

    @IsOptional()
    @IsDateString()
    dateEnd?: string;

    @IsOptional()
    @IsString()
    estatus?: string;

    @IsOptional()
    cancelled?: boolean;

    @IsOptional()
    @IsString()
    vendor?: string;

    @IsOptional()
    @IsString()
    zone?: string;
}