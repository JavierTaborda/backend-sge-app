import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Role } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreateOrdersService } from './create-orders.service';
import { PedidoDTO } from './dtos/pedido.dto';

@Controller('create-orders')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Create Orders')
@ApiBearerAuth()
export class CreateOrdersController {
    constructor(private readonly CreateOrderService: CreateOrdersService) { }

    @Get()
    @ApiOperation({ summary: 'Lista los productos disponibles para crear pedidos' })
    @ApiResponse({ status: 200, description: 'Productos disponibles para el vendedor autenticado.' })
    async GetProductsOrders(
        @CurrentUser('role') role: string,
        @CurrentUser('codven') codven: string,
    ) {
        return await this.CreateOrderService.GetProductsOrders(codven);
    }

    @Get("exchangerate")
    @ApiOperation({ summary: 'Obtiene la tasa de cambio vigente' })
    @ApiResponse({ status: 200, description: 'Tasa de cambio vigente.' })
    async GetExhangeRate() {

        return await this.CreateOrderService.GetExchangeRate();
    }

    @Get("iva")
    @ApiOperation({ summary: 'Obtiene el porcentaje de IVA vigente' })
    @ApiResponse({ status: 200, description: 'Porcentaje de IVA vigente.' })
    async GetIVA() {

        return await this.CreateOrderService.GetIVA();

    }

    @Get("conditions")
    @ApiOperation({ summary: 'Lista las condiciones de pago disponibles' })
    @ApiResponse({ status: 200, description: 'Condiciones disponibles para crear pedidos.' })
    async GetConditions() {

        return await this.CreateOrderService.GetConditions();
    }

    @Role('2', '3', '5')
    @Post()
    @ApiOperation({ summary: 'Crea un pedido' })
    @ApiBody({ type: PedidoDTO })
    @ApiResponse({ status: 201, description: 'Pedido creado correctamente. Retorna el numero de factura.' })
    async CreateOrder(
        @Body() createOrder: PedidoDTO,
        @CurrentUser('codven') codven: string,
        @CurrentUser('nameUser') nameUser: string,) {

        const factNumber = await this.CreateOrderService.InsertOrder(createOrder, codven, nameUser);
        return { factNumber };

    } 
}
