import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsOptional,
    ValidateNested,
} from 'class-validator';
import { CreateDetailDto } from './create-detail.dto';
import { CreateHeaderDto } from './create-header.dto';
import { CreateMovementDto } from './create-movement.dto';

export class CreateSolicitudDto {
  @ValidateNested()
  @Type(() => CreateHeaderDto)
  header: CreateHeaderDto;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateDetailDto)
  details: CreateDetailDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMovementDto)
  movements?: CreateMovementDto[];
}
