

import {
    IsNumber
} from 'class-validator';


export class MotiveItemDto {
    @IsNumber()
    id!: number;

    codmotive!: string;
}      