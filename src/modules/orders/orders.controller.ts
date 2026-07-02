import { Body, Controller, Get, Param, ParseIntPipe, Patch, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Role } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AprobacionPedidoDto } from './dtos/aprobacion.pedido.dto';
import { PedidoFilterDto } from './dtos/pedidos-filters';
import { OrdersService } from './orders.service';

@Controller('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Orders')
@ApiBearerAuth()
export class OrdersController {
  constructor(private readonly orderService: OrdersService) { }

  @Get('All')
  @ApiOperation({ summary: 'Lista todos los pedidos visibles para el usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Pedidos filtrados por rol y vendedor.' })
  async GetPedidos(@CurrentUser('role') role: string, @CurrentUser('codven') codven: string) {
    return this.orderService.GetPedidos(role, codven);
  }

  @Get('rengpedidos/:factNum/')
  @ApiOperation({ summary: 'Lista los renglones de un pedido' })
  @ApiParam({ name: 'factNum', description: 'Numero de factura del pedido', type: Number })
  @ApiResponse({ status: 200, description: 'Renglones del pedido solicitado.' })
  async GetRengPedidos(@Param('factNum', ParseIntPipe) factNum: number) {
    return this.orderService.GetRengProductos(factNum);
  }

  @Get('approval')
  @ApiOperation({ summary: 'Lista pedidos pendientes o disponibles para aprobacion' })
  @ApiResponse({ status: 200, description: 'Pedidos disponibles para aprobacion.', type: AprobacionPedidoDto, isArray: true })
  async GetAprobacionPedidos(@CurrentUser('role') role: string, @CurrentUser('codven') codven: string): Promise<AprobacionPedidoDto[]> {
    return this.orderService.GetAprobacionPedidos(role, codven);
  }

  @Get('filters')
  @ApiOperation({ summary: 'Filtra pedidos' })
  @ApiQuery({ name: 'dateIni', required: false, description: 'Fecha inicial del filtro' })
  @ApiQuery({ name: 'dateEnd', required: false, description: 'Fecha final del filtro' })
  @ApiQuery({ name: 'revisado', required: false, description: 'Estado de revision' })
  @ApiQuery({ name: 'procesado', required: false, description: 'Estado de procesamiento' })
  @ApiQuery({ name: 'cancelled', required: false, description: 'Indica si el pedido esta cancelado', type: Boolean })
  @ApiQuery({ name: 'vendor', required: false, description: 'Codigo del vendedor' })
  @ApiQuery({ name: 'zone', required: false, description: 'Codigo de zona' })
  @ApiResponse({ status: 200, description: 'Pedidos que coinciden con los filtros.' })
  async GetFilters(
    @Query() filters: PedidoFilterDto,
    @CurrentUser('role') role: string, @CurrentUser('codven') codven: string) {

    return this.orderService.GetPedidosFilters(
      filters,
      role,
      codven
    );
  }
  @Get('filters/cancel')
  @ApiOperation({ summary: 'Filtra pedidos cancelados' })
  @ApiQuery({ name: 'dateIni', required: false, description: 'Fecha inicial del filtro' })
  @ApiQuery({ name: 'dateEnd', required: false, description: 'Fecha final del filtro' })
  @ApiQuery({ name: 'revisado', required: false, description: 'Estado de revision' })
  @ApiQuery({ name: 'procesado', required: false, description: 'Estado de procesamiento' })
  @ApiQuery({ name: 'vendor', required: false, description: 'Codigo del vendedor' })
  @ApiQuery({ name: 'zone', required: false, description: 'Codigo de zona' })
  @ApiResponse({ status: 200, description: 'Pedidos cancelados que coinciden con los filtros.' })
  async GetFiltersCancel(
    @Query() filters: PedidoFilterDto,
    @CurrentUser('role') role: string, @CurrentUser('codven') codven: string) {

    return this.orderService.GetPedidosFilters(
      filters,
      role,
      codven,
      true
    );
  }
  // PATCH /orders/:factNum
  @Role('2')
  @Patch(':factNum/')
  @ApiOperation({ summary: 'Actualiza el estado de revision de un pedido' })
  @ApiParam({ name: 'factNum', description: 'Numero de factura del pedido', type: Number })
  @ApiBody({ schema: { type: 'object', properties: { status: { type: 'string', example: '1' } }, required: ['status'] } })
  @ApiResponse({ status: 200, description: 'Estado de revision actualizado.' })
  async updateRevisadoPedido(
    @Param('factNum', ParseIntPipe) factNum: number,
    @Body('status') status: string,
  ) {
    return this.orderService.UpdateRevisadoPedido(factNum, status);
  }

  // PATCH /orders/cancel/:factNum
  @Role( '2', '4', '5')
  @Patch('/cancel/:factNum/')
  @ApiOperation({ summary: 'Cancela un pedido' })
  @ApiParam({ name: 'factNum', description: 'Numero de factura del pedido', type: Number })
  @ApiResponse({ status: 200, description: 'Pedido cancelado correctamente.' })
  async cancelPedido(
    @Param('factNum', ParseIntPipe) factNum: number,

  ) {

    return this.orderService.CancelOrder(factNum);
  }
}

