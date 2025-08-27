import { Controller,Get } from '@nestjs/common';
import { ZonesService } from './zones.service';

@Controller('zones')
export class ZonesController {
     constructor( private readonly orderService: ZonesService){}
    
        @Get()
        async GetPedidos(){
            return  this.orderService.GetZones;
        }
    
}
