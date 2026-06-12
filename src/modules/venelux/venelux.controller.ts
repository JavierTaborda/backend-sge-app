import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVeneluxDetailUseCase } from './application/use-cases/create-venelux-detail.use-case';
import { CreateVeneluxHeaderUseCase } from './application/use-cases/create-venelux-header.use-case';
import { CreateVeneluxSolicitudUseCase } from './application/use-cases/create-venelux-solicitud.use-case';
import { GetVeneluxMaterialsUseCase } from './application/use-cases/get-venelux-materials.use-case';
import { GetVeneluxUnitsUseCase } from './application/use-cases/get-venelux-units.use-case';
import { CreateDetailDto } from './dtos/create-detail.dto';
import { CreateHeaderDto } from './dtos/create-header.dto';
import { CreateSolicitudDto } from './dtos/create-solicitud.dto';

// @UseGuards(JwtAuthGuard)
@Controller('venelux')
export class VeneluxController {
  constructor(
    private readonly getVeneluxMaterialsUseCase: GetVeneluxMaterialsUseCase,
    private readonly getVeneluxUnitsUseCase: GetVeneluxUnitsUseCase,
    private readonly createVeneluxHeaderUseCase: CreateVeneluxHeaderUseCase,
    private readonly createVeneluxDetailUseCase: CreateVeneluxDetailUseCase,
    private readonly createVeneluxSolicitudUseCase: CreateVeneluxSolicitudUseCase,
  ) {}

  @Get('materials')
  getMaterials() {
    return this.getVeneluxMaterialsUseCase.execute();
  }

  @Get('units')
  getUnits() {
    return this.getVeneluxUnitsUseCase.execute();
  }

  @Post('solicitudes/header')
  createHeader(@Body() payload: CreateHeaderDto) {
    return this.createVeneluxHeaderUseCase.execute(payload);
  }

  @Post('solicitudes/detail')
  createDetail(@Body() payload: CreateDetailDto) {
    return this.createVeneluxDetailUseCase.execute(payload);
  }

  @Post('solicitudes/transaction')
  createSolicitudTransaction(@Body() payload: CreateSolicitudDto) {
    return this.createVeneluxSolicitudUseCase.execute(payload);
  }
}
