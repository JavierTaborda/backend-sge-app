import { Body, Controller, Get, Param, ParseIntPipe, Patch, Query, UseGuards } from '@nestjs/common';
import { Role } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AprobacionPedidoDto } from './dtos/aprobacion.pedido.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get('All')
  async GetPedidos() {
    return this.orderService.GetPedidos();
  }

  @Get('rengpedidos/:factNum/')
  async GetRengPedidos(@Param('factNum', ParseIntPipe) factNum: number) {
    return this.orderService.GetRengProductos(factNum);
  }
  @Get('approval')
  async GetAprobacionPedidos(): Promise<AprobacionPedidoDto[]> {
    return this.orderService.GetAprobacionPedidos();
  }

  @Get('filters')
  async GetFilters(
    @Query('dateIni') dateIni?: string,
    @Query('dateEnd') dateEnd?: string,
    @Query('estatus') estatus?: string,
    // @Query('zone') zone?: string,
    @Query('cancelled') cancelled?: boolean,
    @Query('vendor') vendor?: string,
  ) {
    const iniDate = dateIni ? new Date(dateIni) : undefined;
    const endDate = dateEnd ? new Date(dateEnd) : undefined;

    return this.orderService.GetPedidosFilters(
      iniDate,
      endDate,
      estatus,
      cancelled,
      vendor,
    );
  }

  // PATCH /orders/:factNum
  @Role('admin', 'gerente')
  @Patch(':factNum/')
  async updateRevisadoPedido(
    @Param('factNum', ParseIntPipe) factNum: number,
    @Body('status') status: string,
  ) {
    return this.orderService.UpdateRevisadoPedido(factNum, status);
  }
}
