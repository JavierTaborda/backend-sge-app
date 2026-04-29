import {
    IsDate,
    IsNumber,
    IsOptional,
    IsString
} from 'class-validator';


export class ReturnByFactDto {
    @IsNumber()
    fact_num!: number;

    @IsOptional()
    @IsDate()
    fecemis!: Date;
    @IsOptional()
    @IsDate()
    fecdesp!: Date;
    @IsString()
    codcli!: string;

    @IsString()
    clides!: string;

    @IsString()
    codven!: string;

    @IsString()
    vendes!: string;

    art!: {
        co_art: string;
        art_des: string;
        codbarra: string;
    }[];


    @IsOptional()
    @IsString()
    rif!: string;

    @IsOptional()
    @IsString()
    telefonos!: string;

    @IsOptional()
    @IsString()
    email!: string;

    @IsOptional()
    @IsString()
    dir_ent2!: string;

    @IsOptional()
    @IsNumber()
    prednum!: number;

    @IsOptional()
    @IsNumber()
    pednum!: number;
    @IsOptional()
    @IsString()
    zondes!: string;
    @IsOptional()
    @IsString()
    codzon!: string;
}