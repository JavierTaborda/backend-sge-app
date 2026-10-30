import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DispatchOrderParamsDto {
  @ApiProperty({ description: 'Numero de predespacho', example: 6242 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(2147483647)
  prednum: number;

  @ApiProperty({ description: 'Numero de pedido', example: 19665 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(2147483647)
  pednum: number;
}
