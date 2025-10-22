import { IsString } from 'class-validator';
export class SellersDto {

    @IsString()
    codven: string;

    @IsString()
    vendes: string;
}