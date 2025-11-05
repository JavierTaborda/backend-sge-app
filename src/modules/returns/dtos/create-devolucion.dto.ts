import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDevolucionDto {
    @IsDateString()
    fecemis: string;

    @IsString()
    @MaxLength(1)
    estatus: string;

    @IsString()
    @MaxLength(1)
    anulada: string;

    @IsString()
    @MaxLength(1)
    cerrada: string;

    @IsString()
    @MaxLength(6)
    codcli: string;

    @IsString()
    @MaxLength(100)
    clides: string;

    @IsString()
    @MaxLength(6)
    codven: string;

    @IsString()
    @MaxLength(60)
    vendes: string;

    @IsString()
    @MaxLength(30)
    codart: string;

    @IsString()
    @MaxLength(20)
    @IsOptional()
    codbarra: string;

    @IsString()
    @MaxLength(120)
    artdes: string;

    @IsString()
    @MaxLength(40)
    serial1: string;

    @IsString()
    @MaxLength(255)
    @IsOptional()
    motivo: string;

    @IsString()
    @MaxLength(255)
    @IsOptional()
    obsvendedor: string;


    @IsString()
    @MaxLength(30)
    registradopor: string;

    @IsDateString()
    fecharegistro: string;
    
    @IsString()
    @MaxLength(255)
    @IsOptional()
    imgart: string;

}
