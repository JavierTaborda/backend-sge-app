import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ZoneDto } from './dtos/zone.dto';
import { ZonesService } from './zones.service';

@Controller('zones')
@UseGuards(JwtAuthGuard)
@ApiTags('Zones')
@ApiBearerAuth()

export class ZonesController {
  constructor(private readonly zoneService: ZonesService) {}
  @Get()
  @ApiOperation({ summary: 'Lista todas las zonas' })
  @ApiResponse({ status: 200, description: 'Zonas registradas.', type: ZoneDto, isArray: true })
  async GetZones(): Promise<ZoneDto[]> {
    return this.zoneService.GetZones();
  }
}
