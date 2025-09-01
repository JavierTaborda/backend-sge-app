import { Controller, Get } from '@nestjs/common';
import { ZoneDto } from './dtos/zone.dto';
import { ZonesService } from './zones.service';

@Controller('zones')
export class ZonesController {
  constructor(private readonly zoneService: ZonesService) {}

  @Get()
  async GetZones(): Promise<ZoneDto[]> {

      return this.zoneService.GetZones();
  }
//   @Get()
//   async GetZones(@Req() request: Request): Promise<ZoneDto[]> {
//     console.log('Headers:', request.headers); 
//     return this.zoneService.GetZones();
//   }
}
