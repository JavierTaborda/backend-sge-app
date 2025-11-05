import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDevolucionDto } from './dtos/create-devolucion.dto';
import { ReturnsService } from './returns.service';

//@UseGuards(JwtAuthGuard)
@Controller('returns')
export class ReturnsController {

    constructor(private readonly returnsService: ReturnsService) { }

    @Get('byfactnumber/:fact_number')
    async getOrderByFactNumber(
        // @Query('fact_number') fact_number?: number,
        @Param('fact_number') fact_number: number
    ) {
      
        return this.returnsService.getOrderByFactNumber(fact_number);

    }

    @Get('byserial/:serial')
    async getBySerial(
        @Param('serial') serial: string
    ) {
        return this.returnsService.getDataBySerial(serial);
    }
    @Post()
    async createReturn(
        @Body() createDevolucionDto: CreateDevolucionDto
    ) {
        return this.returnsService.createReturn(createDevolucionDto);
    }
}