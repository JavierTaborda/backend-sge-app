import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Role } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreateOrdersService } from './create-orders.service';
import { PedidoDTO } from './dtos/pedido.dto';

@Controller('create-orders')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CreateOrdersController {
    constructor(private readonly CreateOrderService: CreateOrdersService) { }

    @Get()
    async GetProductsOrders(
        @CurrentUser('role') role: string,
        @CurrentUser('codven') codven: string,
    ) {
        return await this.CreateOrderService.GetProductsOrders(codven);
    }

    @Get("exchangerate")
    async GetExhangeRate() {

        return await this.CreateOrderService.GetExchangeRate();
    }

    @Get("iva")
    async GetIVA() {

        return await this.CreateOrderService.GetIVA();

    }

    @Get("conditions")
    async GetConditions() {

        return await this.CreateOrderService.GetConditions();
    }

    @Role('2', '3', '5')
    @Post()
    async CreateOrder(
        @Body() createOrder: PedidoDTO,
        @CurrentUser('codven') codven: string,
        @CurrentUser('nameUser') nameUser: string,) {

        const factNumber = await this.CreateOrderService.InsertOrder(createOrder, codven, nameUser);
        return { factNumber };

    }
}
