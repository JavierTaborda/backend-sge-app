import { Controller, Get, Query } from '@nestjs/common';
import { CreateOrdersService } from './create-orders.service';

@Controller('create-orders')
//@UseGuards(JwtAuthGuard, RolesGuard)
export class CreateOrdersController {
    constructor(private readonly CreateOrderService: CreateOrdersService) { }

    @Get()
    async GetProductsOrders(
        @Query('codven') codven?: string
        // @CurrentUser('role') role: string,
        // @CurrentUser('codven') codven: string,
    ) {

        return await this.CreateOrderService.GetProductsOrders(codven);
    }

    @Get("exchangerate")
    async GetExhangeRate() {

        return await this.CreateOrderService.GetExchangeRate();
    }
}
