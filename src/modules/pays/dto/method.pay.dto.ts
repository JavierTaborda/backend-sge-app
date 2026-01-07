
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class MethodPayDto {
    @IsNumber()
    codigounico: number;

    @IsString()
    textList: string;
    @IsString()
    monedapago: string;
    @IsBoolean()
    pagoporbanco: boolean;

}