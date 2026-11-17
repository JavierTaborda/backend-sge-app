import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DispatchService } from './dispatch.service';
import { DispatchOrderParamsDto } from './dtos/dispatch-order-params.dto';
import {
  DispatchItemDto,
  DispatchOrderDto,
  DispatchOrderWithItemsDto,
} from './dtos/dispatch-order.dto';
import { ReceivePredispatchDto } from './dtos/receive-predispatch.dto';

@Controller('dispatch')
@UseGuards(JwtAuthGuard)
@ApiTags('Dispatch')
@ApiBearerAuth()
export class DispatchController {
  constructor(private readonly dispatchService: DispatchService) {}

  @Post('orders/predispatch')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'Recibe del frontend un predespacho ya escaneado',
    description:
      'Actualiza las horas de la cabecera y los items escaneados del predespacho.',
  })
  @ApiBody({
    description: 'Cabecera del despacho con sus items escaneados.',
    type: ReceivePredispatchDto,
  })
  @ApiResponse({ status: 202, description: 'Predespacho recibido' })
  @ApiResponse({
    status: 400,
    description: 'Se requieren prednum, pednum y un arreglo items',
  })
  async receivePredispatch(
    @Body() body: ReceivePredispatchDto,
    @CurrentUser('userid_sge') userid_sge: string,
  ): Promise<{ received: true }> {
    await this.dispatchService.savePredispatch(body, userid_sge);

    return { received: true };
  }

  @Get('list')
  @ApiOperation({
    summary: 'Lista barcodes que no requieren serial',
  })
  @ApiResponse({ status: 200, type: String, isArray: true })
  getBarcodesWithoutSerial(): string[] {
    return this.dispatchService.getBarcodesWithoutSerial();
  }

  @Get('orders')
  @ApiOperation({
    summary: 'Lista despachos en estados 0 y 1, y finalizados hoy',
    description:
      'Lista despachos no anulados en estado 0 o 1, además de los finalizados en la fecha actual, ordenados por predespacho descendente y pedido ascendente. El contenido se consulta en la ruta /items.',
  })
  @ApiResponse({ status: 200, type: DispatchOrderDto, isArray: true })
  @ApiResponse({ status: 401, description: 'Autenticacion requerida' })
  getOrders(
    @CurrentUser('userid_sge') userid_sge: string,
    @CurrentUser('role') role: string,
  ): Promise<DispatchOrderDto[]> {
    return this.dispatchService.getOrders(userid_sge, role);
  }

  @Get('orders/with-items')
  @ApiOperation({
    summary: 'Lista despachos en estados 0 y 1, y finalizados hoy con items',
    description:
      'Devuelve despachos no anulados en estado 0 o 1, además de los finalizados en la fecha actual, con el mismo detalle de items disponible en la ruta /items.',
  })
  @ApiResponse({ status: 200, type: DispatchOrderWithItemsDto, isArray: true })
  @ApiResponse({ status: 401, description: 'Autenticacion requerida' })
  getOrdersWithItems(
    @CurrentUser('userid_sge') userid_sge: string,
    @CurrentUser('role') role: string,
  ): Promise<DispatchOrderWithItemsDto[]> {
    return this.dispatchService.getOrdersWithItems(userid_sge, role);
  }

  @Get('orders/:prednum/:pednum')
  @ApiOperation({
    summary: 'Obtiene un despacho por numero de predespacho y pedido',
  })
  @ApiParam({ name: 'prednum', type: Number, example: 6242 })
  @ApiParam({ name: 'pednum', type: Number, example: 19665 })
  @ApiResponse({ status: 200, type: DispatchOrderDto })
  @ApiResponse({ status: 400, description: 'Numeros invalidos' })
  @ApiResponse({ status: 404, description: 'Despacho no encontrado o anulado' })
  getOrder(
    @Param() params: DispatchOrderParamsDto,
    @CurrentUser('userid_sge') userid_sge: string,
    @CurrentUser('role') role: string,
  ): Promise<DispatchOrderDto> {
    return this.dispatchService.getOrder(
      params.prednum,
      params.pednum,
      userid_sge,
      role,
    );
  }

  @Get('orders/:prednum/:pednum/items')
  @ApiOperation({
    summary: 'Lista el contenido completo de un predespacho y pedido',
    description:
      'Consulta en dtpredes los items de despachos finalizados hoy y en mvpredes los demas, sin limitar la cantidad de items.',
  })
  @ApiParam({ name: 'prednum', type: Number, example: 6242 })
  @ApiParam({ name: 'pednum', type: Number, example: 19665 })
  @ApiResponse({ status: 200, type: DispatchItemDto, isArray: true })
  @ApiResponse({ status: 400, description: 'Numeros invalidos' })
  @ApiResponse({ status: 404, description: 'Despacho no encontrado o anulado' })
  getOrderItems(
    @Param() params: DispatchOrderParamsDto,
    @CurrentUser('userid_sge') userid_sge: string,
    @CurrentUser('role') role: string,
  ): Promise<DispatchItemDto[]> {
    return this.dispatchService.getOrderItems(
      params.prednum,
      params.pednum,
      userid_sge,
      role,
    );
  }
}
