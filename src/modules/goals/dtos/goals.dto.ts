import { IsNumber, IsString } from 'class-validator';

export class GoalsDto {
    @IsString()
    year: string;

    @IsString()
    mes: string;

    @IsString()
    codven: string;


    @IsNumber()
    asignado: number;

    @IsNumber()
    utilizado: number;

    @IsString()
    codart: string;

    @IsString()
    artdes: string;

    @IsString()
    codcat: string;
    
    @IsString()
    catdes: string;


}