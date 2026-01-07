import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class TasaDto {
    @IsDate()
    @Type(() => Date)
    fecha: Date;

    @IsString()
    co_mone: string;

    @IsNumber()
    @Type(() => Number)
    tasa_v: number;
} 