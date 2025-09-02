import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ZoneDto } from './dtos/zone.dto';
import { ZonesService } from './zones.service';

@Controller('zones')
@UseGuards(JwtAuthGuard)

export class ZonesController {
  constructor(private readonly zoneService: ZonesService) {}
  @Get()
  async GetZones(): Promise<ZoneDto[]> {
    return this.zoneService.GetZones();
  }
}
