
import { IsString } from 'class-validator';

export class CodeSwiftDto {
    @IsString()
    codigobanco: string;
    @IsString()
    codigoswift: string;
    @IsString()
    nombrecorto: string;
    @IsString()
    tipocuenta: string;
}