import { Expose, Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class ZoneDto {
  @Expose()
  @IsString()
  @Transform(({ value }) => value?.trim())
  co_zon: string;

  @Expose()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  zon_des?: string;
}
