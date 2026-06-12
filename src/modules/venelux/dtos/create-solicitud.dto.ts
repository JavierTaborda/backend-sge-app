import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    ValidateNested,
} from 'class-validator';
import { CreateDetailDto } from './create-detail.dto';
import { CreateHeaderDto } from './create-header.dto';

export class CreateSolicitudDto {
  @ValidateNested()
  @Type(() => CreateHeaderDto)
  header: CreateHeaderDto;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateDetailDto)
  details: CreateDetailDto[];
}
