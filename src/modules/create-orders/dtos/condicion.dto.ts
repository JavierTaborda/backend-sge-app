import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CondicionDto {
    @IsString()
    co_cond: string;

    @IsString()
    cond_des: string;

    @IsNumber()
    @Type(() => Number)
    dias_cred: number;
}