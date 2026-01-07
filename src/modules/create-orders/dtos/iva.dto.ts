import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class IVADto {
    // @IsDate()
    // @Type(() => Date)
    // fecha: Date;

    @IsNumber()
    @Type(() => Number)
    tasa: number;

    // @IsNumber()
    // @Type(() => Number)
    // tasa3: number;

    // @IsNumber()
    // @Type(() => Number)
    // tasa4: number;

    // @IsNumber()
    // @Type(() => Number)
    // tasa5: number;

    // @IsNumber()
    // @Type(() => Number)
    // tasag10: number;

    // @IsNumber()
    // @Type(() => Number)
    // tasag20: number;
}
