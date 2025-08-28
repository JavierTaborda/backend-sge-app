import { Controller, Get, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get()
  async GetPedidos() {
    return this.orderService.GetPedidos();
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
}
