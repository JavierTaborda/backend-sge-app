import {
    IsNumber,
    IsString
} from 'class-validator';


export class ReturnByFactDto {
  @IsNumber()
  fact_num: number;

  @IsString()
  fecemis: Date;

  @IsString()
  codcli: string;
  
  @IsString()
  clides: string;

  @IsString()
  codven: string;
  
  @IsString()
  vendes: string;
  
    art: {
        co_art: string;
        art_des: string;
        codbarra: string;
    }[];
}