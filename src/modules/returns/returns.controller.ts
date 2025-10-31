import { Controller, Get, Param } from '@nestjs/common';
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
        console.log(fact_number)
        return this.returnsService.getOrderByFactNumber(fact_number);

    }

    @Get('byserial/:serial')
    async getBySerial(
        @Param('serial') serial: string
    ) {
        return this.returnsService.getDataBySerial(serial);
    }
}