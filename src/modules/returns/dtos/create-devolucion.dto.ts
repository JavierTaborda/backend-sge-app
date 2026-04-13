import { Type } from 'class-transformer';
import {
    IsDate,
    IsInt,
    IsOptional,
    IsString,
    MaxLength,
    Min
} from 'class-validator';
//import type { ftdevolucion } from '../types/ftdevolucion';
import type { dtdevolucion } from '../types/dtdevolucion';

export class CbDevolucionDto {

    @IsString()
    @MaxLength(40)
    motivo: string;

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
    @MaxLength(30)
    codart: string;

    @IsString()
    @MaxLength(120)
    artdes: string;

    @IsString()
    @IsOptional()
    @MaxLength(30) // Ajustado a VarChar(30)
    codbarra?: string;

    @IsString()
    @MaxLength(40)
    serial1: string;

    @IsInt()
    @Min(0)
    factnum: number;

    @IsString()
    @MaxLength(30)
    registradopor: string;

    @Type(() => Date)
    @IsDate()
    fecharegistro: Date;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    obsregistro?: string; 

    @IsString()
    @IsOptional()
    @MaxLength(60)
    linkproforma?: string;

    @IsInt()
    @IsOptional()
    owneruser: number;

    @IsOptional()
    dtdevolucion: dtdevolucion;

    @IsOptional()
    rif: string ;
    @IsOptional()
    telefono: string ;
    @IsOptional()
    dirretiro: string ;
 
    
}       