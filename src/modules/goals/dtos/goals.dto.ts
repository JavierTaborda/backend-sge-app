import { IsNumber, IsOptional, IsString } from 'class-validator';

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

    @IsOptional()
    @IsString()
    vendes: string;

}