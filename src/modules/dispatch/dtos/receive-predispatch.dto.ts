import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  Allow,
  ArrayMinSize,
  IsArray,
  IsIn,
  IsInt,
  isISO8601,
  IsString,
  Matches,
  ValidateBy,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

export const CAPTURE_TIME_PATTERN = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

export class ReceivePredispatchItemDto {
  @ApiProperty({ example: 6119 })
  @IsInt()
  prednum!: number;

  @ApiProperty({ example: 19528 })
  @IsInt()
  pednum!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  itemnum!: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  rennum!: number;

  @ApiProperty({ example: '0001' })
  @IsString()
  codalma!: string;

  @ApiProperty({ example: 'ASFR-12FB-I' })
  @IsString()
  codart!: string;

  @ApiProperty({ example: 1, enum: [0, 1] })
  @IsIn([0, 1, true, false])
  compuesto!: boolean | number;

  @ApiProperty({ example: true })
  @IsIn([0, 1, true, false])
  manjser!: boolean | number;

  @ApiProperty({ type: String, nullable: true })
  @ValidateIf((_object, value) => value !== null)
  @IsString()
  codbarra!: string | null;

  @ApiProperty({ type: String, nullable: true })
  @ValidateIf((_object, value) => value !== null)
  @IsString()
  serial1!: string | null;

  @ApiProperty({ type: String, nullable: true })
  @ValidateIf((_object, value) => value !== null)
  @IsString()
  refbarra!: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    example: '10:26:49',
    description: 'Hora de Venezuela (HH:mm:ss) o fecha ISO 8601.',
  })
  @ValidateIf((_object, value) => value !== null)
  @ValidateBy({
    name: 'isCaptureDateOrTime',
    validator: {
      validate: (value: unknown) =>
        typeof value === 'string' &&
        (CAPTURE_TIME_PATTERN.test(value) || isISO8601(value)),
      defaultMessage: () =>
        '$property debe ser una hora valida en formato HH:mm:ss o una fecha ISO 8601',
    },
  })
  horacapture!: string | null;

  @Allow()
  artdes?: string | null;

  @Allow()
  Articulo?: string;

  @Allow()
  recouser?: string | number;

  @Allow()
  supervisor?: string | null;

  @Allow()
  changed?: boolean;

  @Allow()
  selected?: boolean;

  @Allow()
  objectstate?: string;

  @Allow()
  objecticon?: string;

  @Allow()
  lectura?: string | null;

  @Allow()
  objectstate2?: string;
}

export class ReceivePredispatchDto {
  @ApiProperty({ example: 6119 })
  @IsInt()
  prednum!: number;

  @ApiProperty({ example: 19528 })
  @IsInt()
  pednum!: number;

  @ApiProperty({ example: '2026-10-15 10:26:49' })
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}:\d{2}$/)
  fecdesp!: string;

  @ApiProperty({ type: ReceivePredispatchItemDto, isArray: true })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ReceivePredispatchItemDto)
  items!: ReceivePredispatchItemDto[];

  @Allow()
  conformado?: string;

  @Allow()
  fecfinalStr?: string | null;

  @Allow()
  fecfinal?: string | null;

  @Allow()
  duracion?: string | null;

  @Allow()
  co_cli?: string;

  @Allow()
  Cliente?: string | null;

  @Allow()
  co_zon?: string;

  @Allow()
  Zona?: string | null;

  @Allow()
  co_ven?: string;

  @Allow()
  Vendedor?: string | null;

  @Allow()
  cantdesp?: number;

  @Allow()
  owneruser?: string;

  @Allow()
  supervisor?: string | null;
}
