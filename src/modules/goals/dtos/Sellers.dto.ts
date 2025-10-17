import { IsString } from 'class-validator';
export class SellersDto {

    @IsString()
    co_ven: string;

    @IsString()
    des_ven: string;
}