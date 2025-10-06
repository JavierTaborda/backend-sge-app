import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { WarehousesService } from './warehouses.service';

@Controller('warehouses')
@UseGuards(JwtAuthGuard)
export class WarehousesController {
    constructor(private readonly warehousesService:WarehousesService) {}

    @Get()
    async GetAlmacenes(){
        return this.warehousesService.getAlmacenes();
    }

}
