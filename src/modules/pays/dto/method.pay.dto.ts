
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class MethodPayDto {
    @IsNumber()
    codigounico: number;

    @IsString()
    textList: string;
    @IsString()
    monedapago: string;
    @IsString()
    bancopago: string;
    @IsString()
    empresapagadora: string;
    @IsBoolean()
    pagoporbanco: boolean;

}