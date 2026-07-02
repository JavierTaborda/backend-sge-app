import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateVeneluxDetailUseCase } from './application/use-cases/create-venelux-detail.use-case';
import { CreateVeneluxHeaderUseCase } from './application/use-cases/create-venelux-header.use-case';
import { CreateVeneluxSolicitudUseCase } from './application/use-cases/create-venelux-solicitud.use-case';
import { GetVeneluxMaterialsUseCase } from './application/use-cases/get-venelux-materials.use-case';
import { GetVeneluxUnitsUseCase } from './application/use-cases/get-venelux-units.use-case';
import { CreateDetailDto } from './dtos/create-detail.dto';
import { CreateHeaderDto } from './dtos/create-header.dto';
import { CreateSolicitudDto } from './dtos/create-solicitud.dto';

@UseGuards(JwtAuthGuard)
@Controller('venelux')
@ApiTags('Venelux')
@ApiBearerAuth()
export class VeneluxController {
  constructor(
    private readonly getVeneluxMaterialsUseCase: GetVeneluxMaterialsUseCase,
    private readonly getVeneluxUnitsUseCase: GetVeneluxUnitsUseCase,
    private readonly createVeneluxHeaderUseCase: CreateVeneluxHeaderUseCase,
    private readonly createVeneluxDetailUseCase: CreateVeneluxDetailUseCase,
    private readonly createVeneluxSolicitudUseCase: CreateVeneluxSolicitudUseCase,
  ) {}

  @Get('materials')
  @ApiOperation({ summary: 'Lista materiales Venelux' })
  @ApiResponse({ status: 200, description: 'Materiales disponibles en Venelux.' })
  getMaterials() {
    return this.getVeneluxMaterialsUseCase.execute();
  }

  @Get('units')
  @ApiOperation({ summary: 'Lista unidades Venelux' })
  @ApiResponse({ status: 200, description: 'Unidades disponibles en Venelux.' })
  getUnits() {
    return this.getVeneluxUnitsUseCase.execute();
  }

  @Post('solicitudes/header')
  @ApiOperation({ summary: 'Crea el encabezado de una solicitud Venelux' })
  @ApiBody({ type: CreateHeaderDto })
  @ApiResponse({ status: 201, description: 'Encabezado de solicitud creado correctamente.' })
  createHeader(@Body() payload: CreateHeaderDto) {
    return this.createVeneluxHeaderUseCase.execute(payload);
  }

  @Post('solicitudes/detail')
  @ApiOperation({ summary: 'Crea el detalle de una solicitud Venelux' })
  @ApiBody({ type: CreateDetailDto })
  @ApiResponse({ status: 201, description: 'Detalle de solicitud creado correctamente.' })
  createDetail(@Body() payload: CreateDetailDto) {
    return this.createVeneluxDetailUseCase.execute(payload);
  }

  @Post('solicitudes/transaction')
  @ApiOperation({ summary: 'Crea una solicitud Venelux completa en una transaccion' })
  @ApiBody({ type: CreateSolicitudDto })
  @ApiResponse({ status: 201, description: 'Solicitud Venelux creada correctamente.' })
  createSolicitudTransaction(@Body() payload: CreateSolicitudDto) {
    return this.createVeneluxSolicitudUseCase.execute(payload);
  }
}
