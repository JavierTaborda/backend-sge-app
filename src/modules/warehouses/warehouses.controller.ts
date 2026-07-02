import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { WarehousesService } from './warehouses.service';

@Controller('warehouses')
@UseGuards(JwtAuthGuard)
@ApiTags('Warehouses')
@ApiBearerAuth()
export class WarehousesController {
    constructor(private readonly warehousesService:WarehousesService) {}

    @Get()
    @ApiOperation({ summary: 'Lista todos los almacenes' })
    @ApiResponse({ status: 200, description: 'Almacenes registrados.' })
    async GetAlmacenes(){
        return this.warehousesService.getAlmacenes();
    }

}
