import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { CbDevolucionDto } from './dtos/create-devolucion.dto';
import { ReturnsService } from './returns.service';

@UseGuards(JwtAuthGuard)
@Controller('returns')
@ApiTags('Returns')
@ApiBearerAuth()
export class ReturnsController {

    constructor(private readonly returnsService: ReturnsService) { }

    @Get('byfactnumber/:fact_number')
    @ApiOperation({ summary: 'Obtiene datos de devolucion por numero de factura' })
    @ApiParam({ name: 'fact_number', description: 'Numero de factura' })
    @ApiResponse({ status: 200, description: 'Datos encontrados por factura.' })
    async getOrderByFactNumber(
        @Param('fact_number') fact_number: number
    ) {

        return this.returnsService.getOrderByFactNumber(fact_number);

    }

    @Get('byserial/:serial')
    @ApiOperation({ summary: 'Obtiene datos de devolucion por serial' })
    @ApiParam({ name: 'serial', description: 'Serial del producto' })
    @ApiResponse({ status: 200, description: 'Datos encontrados por serial.' })
    async getBySerial(
        @Param('serial') serial: string
    ) {
        return this.returnsService.getDataBySerial(serial);
    }
    @Get('motives')
    @ApiOperation({ summary: 'Lista motivos de devolucion' })
    @ApiResponse({ status: 200, description: 'Motivos disponibles segun el rol del usuario.' })
    async getMotives(
        @CurrentUser('role') role: string,
    ) {
        const result = await this.returnsService.getMotives(role); 
        return result;
    }
    @Post()
    @ApiOperation({ summary: 'Crea una devolucion' })
    @ApiBody({ type: CbDevolucionDto })
    @ApiResponse({ status: 201, description: 'Devolucion creada correctamente.' })
    async createReturn(
        @CurrentUser('codven') codven: string,
        @CurrentUser('nameUser') nameUser: string,
        @CurrentUser('email') email: string,
        @CurrentUser('userid_sge') userid_sge: string,
        @Body() createDevolucionDto: CbDevolucionDto
    ) {
        return this.returnsService.createReturn(createDevolucionDto, codven, nameUser, userid_sge, email);
    }
}