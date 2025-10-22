import { Body, Controller, Get, Param, ParseIntPipe, Patch, Query, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Role } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AprobacionPedidoDto } from './dtos/aprobacion.pedido.dto';
import { PedidoFilterDto } from './dtos/pedidos-filters';
import { OrdersService } from './orders.service';

@Controller('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OrdersController {
  constructor(private readonly orderService: OrdersService) { }

  @Get('All')
  async GetPedidos(@CurrentUser('role') role: string, @CurrentUser('codven') codven: string) {
    return this.orderService.GetPedidos(role, codven);
  }

  @Get('rengpedidos/:factNum/')
  async GetRengPedidos(@Param('factNum', ParseIntPipe) factNum: number) {
    return this.orderService.GetRengProductos(factNum);
  }

  @Get('approval')
  async GetAprobacionPedidos(@CurrentUser('role') role: string, @CurrentUser('codven') codven: string): Promise<AprobacionPedidoDto[]> {
    return this.orderService.GetAprobacionPedidos(role, codven);
  }

  @Get('filters')
  async GetFilters(
    @Query() filters: PedidoFilterDto,
    @CurrentUser('role') role: string, @CurrentUser('codven') codven: string) {

    return this.orderService.GetPedidosFilters(
      filters,
      role, 
      codven
    );
  }
  // PATCH /orders/:factNum
  @Role('1', '2')
  @Patch(':factNum/')
  async updateRevisadoPedido(
    @Param('factNum', ParseIntPipe) factNum: number,
    @Body('status') status: string,
  ) {
    return this.orderService.UpdateRevisadoPedido(factNum, status);
  }
  // PATCH /orders/comment/:factNum
  @Role('4', '5')
  @Patch('/comment/:factNum/')
  async updatecommentFact(
    @Param('factNum', ParseIntPipe) factNum: number,
    @Body('newcomment') newcomment: string,
  ) {
    return this.orderService.UpdateComment(factNum, newcomment);
  }
}

