import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateDevolucionDto } from './dtos/create-devolucion.dto';
import { ReturnsService } from './returns.service';

@UseGuards(JwtAuthGuard)
@Controller('returns')
export class ReturnsController {

    constructor(private readonly returnsService: ReturnsService) { }

    @Get('byfactnumber/:fact_number')
    async getOrderByFactNumber(
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
    @Get('motives')
    async getMotives(

    ) {
        return this.returnsService.getMotives();
    }
    @Post()
    async createReturn(
        @CurrentUser('codven') codven: string,
        @Body() createDevolucionDto: CreateDevolucionDto
    ) {

        return this.returnsService.createReturn(createDevolucionDto, codven);
    }
}