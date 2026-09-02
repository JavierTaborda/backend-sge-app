import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateVeneluxDetailUseCase } from './application/use-cases/create-venelux-detail.use-case';
import { CreateVeneluxHeaderUseCase } from './application/use-cases/create-venelux-header.use-case';
import { CreateVeneluxMovementUseCase } from './application/use-cases/create-venelux-movement.use-case';
import { CreateVeneluxSolicitudUseCase } from './application/use-cases/create-venelux-solicitud.use-case';
import { GetVeneluxMaterialsUseCase } from './application/use-cases/get-venelux-materials.use-case';
import { GetVeneluxSolicitudesStatusUseCase } from './application/use-cases/get-venelux-solicitudes-status.use-case';
import { GetVeneluxSolicitudesWithMaterialsUseCase } from './application/use-cases/get-venelux-solicitudes-with-materials.use-case';
import { GetVeneluxUnitsUseCase } from './application/use-cases/get-venelux-units.use-case';
import { CreateDetailDto } from './dtos/create-detail.dto';
import { CreateHeaderDto } from './dtos/create-header.dto';
import { CreateMovementDto } from './dtos/create-movement.dto';
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
    private readonly createVeneluxMovementUseCase: CreateVeneluxMovementUseCase,
    private readonly createVeneluxSolicitudUseCase: CreateVeneluxSolicitudUseCase,
    private readonly getVeneluxSolicitudesStatusUseCase: GetVeneluxSolicitudesStatusUseCase,
    private readonly getVeneluxSolicitudesWithMaterialsUseCase: GetVeneluxSolicitudesWithMaterialsUseCase,
  ) {}

  @Get('materials')
  @ApiOperation({ summary: 'Lista materiales Venelux' })
  @ApiQuery({ name: 'page', required: false, description: 'Pagina a consultar', example: '1' })
  @ApiQuery({ name: 'limit', required: false, description: 'Cantidad de registros por pagina', example: '50' })
  @ApiResponse({ status: 200, description: 'Materiales disponibles en Venelux con paginacion.' })
  getMaterials(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '50',
  ) {
    return this.getVeneluxMaterialsUseCase.execute(+page, +limit);
  }

  @Get('materials/all')
  @ApiOperation({ summary: 'Lista todos los materiales Venelux sin paginacion' })
  @ApiResponse({ status: 200, description: 'Todos los materiales disponibles en Venelux sin paginacion.' })
  getAllMaterials() {
    return this.getVeneluxMaterialsUseCase.executeAll();
  }

  @Get('units')
  @ApiOperation({ summary: 'Lista unidades Venelux' })
  @ApiResponse({ status: 200, description: 'Unidades disponibles en Venelux.' })
  getUnits() {
    return this.getVeneluxUnitsUseCase.execute();
  }
@Get('obras')
  @ApiOperation({ summary: 'Lista obras Venelux' })
  @ApiResponse({ status: 200, description: 'Obras disponibles en Venelux.' })
  getObras(  @CurrentUser('userid_sge') userid_sge: string,) {
    return this.getVeneluxMaterialsUseCase.getObras(userid_sge);
  }

  @Get('solicitudes')
  @ApiOperation({ summary: 'Consulta solicitudes Venelux con su lista de materiales' })
  @ApiResponse({ status: 200, description: 'Solicitudes Venelux con sus materiales.' })
  getSolicitudes() {
    const  result= this.getVeneluxSolicitudesWithMaterialsUseCase.execute();
   
    return result;
  }

  @Get('solicitudes/status')
  @ApiOperation({ summary: 'Resumen rapido de solicitudes Venelux por estatus' })
  @ApiResponse({ status: 200, description: 'Totales de solicitudes agrupadas por estatus numerico.' })
  getSolicitudesStatus(
    @CurrentUser('role') role: string,
    @CurrentUser('userid_sge') userid_sge: string,
  ) {
    return this.getVeneluxSolicitudesStatusUseCase.execute(role, userid_sge);
  }

  @Post('solicitudes/header')
  @ApiOperation({ summary: 'Crea el encabezado de una solicitud Venelux' })
   @ApiBody({ type: CreateHeaderDto })
  @ApiResponse({ status: 201, description: 'Encabezado de solicitud creado correctamente.' })
  createHeader(
    @Body() payload: CreateHeaderDto,
    @CurrentUser('userid_sge') userid_sge: string,
  ) {
    return this.createVeneluxHeaderUseCase.execute(payload, userid_sge);
  }

  @Post('solicitudes/detail')
  @ApiOperation({ summary: 'Crea el detalle de una solicitud Venelux' })
  @ApiBody({ type: CreateDetailDto })
  @ApiResponse({ status: 201, description: 'Detalle de solicitud creado correctamente.' })
  createDetail(@Body() payload: CreateDetailDto) {
    return this.createVeneluxDetailUseCase.execute(payload);
  }

  @Post('solicitudes/movement')
  @ApiOperation({ summary: 'Crea un movimiento de solicitud Venelux' })
  @ApiBody({ type: CreateMovementDto })
  @ApiResponse({ status: 201, description: 'Movimiento de solicitud creado correctamente.' })
  createMovement(@Body() payload: CreateMovementDto) {
    return this.createVeneluxMovementUseCase.execute(payload);
  }

  @Post('solicitudes/transaction')
  @ApiOperation({ summary: 'Crea una solicitud Venelux completa en una transaccion' })
  @ApiBody({ type: CreateSolicitudDto })
  @ApiResponse({ status: 201, description: 'Solicitud Venelux creada correctamente.' })
  createSolicitudTransaction(@Body() payload: CreateSolicitudDto, @CurrentUser('userid_sge') userid_sge: string,) {

    
    return this.createVeneluxSolicitudUseCase.execute(payload, userid_sge);
  }
}
