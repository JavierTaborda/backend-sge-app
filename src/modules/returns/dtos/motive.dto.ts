import { CodMotives } from "../types/CodMotives";


import {
    IsNumber
} from 'class-validator';


export class MotiveItemDto {
    @IsNumber()
    id: number;

    codmotive: CodMotives;
}