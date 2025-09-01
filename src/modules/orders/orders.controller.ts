import { Body, Controller, Get, Param, ParseIntPipe, Patch, Query } from '@nestjs/common';
import { AprobacionPedidoDto } from './dtos/aprobacion.pedido.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get()
  async GetPedidos() {
    return this.orderService.GetPedidos();
  }

  @Get('rengpedidos/:factNum/')
  async GetRengPedidos(@Param('factNum', ParseIntPipe) factNum: number,) {
     
    return this.orderService.GetRengProductos(factNum);
  }
  @Get('approval')
  async GetAprobacionPedidos(): Promise<AprobacionPedidoDto[]> {
    return this.orderService.GetAprobacionPedidos();
  }

  @Get('aproval/filters')
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
  @Patch(':factNum/')
  async updateRevisadoPedido(
    @Param('factNum', ParseIntPipe) factNum: number,
    @Body('status') status: string,
  ) {
    return this.orderService.UpdateRevisadoPedido(factNum, status);
  }
}
