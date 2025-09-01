import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { ZoneDto } from './dtos/zone.dto';

@Injectable()
export class ZonesService {
  constructor(private readonly sql: SQLServerPrismaService) {}

  async GetZones(): Promise<ZoneDto[]> {
    
    const zones = await this.sql.zona.findMany({});
    return plainToInstance(ZoneDto, zones, { excludeExtraneousValues: true });
  }
}
