import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CustomersService } from './customers.service';

@UseGuards(JwtAuthGuard)
@Controller('customers')
@ApiTags('Customers')
@ApiBearerAuth()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Get()
  @ApiOperation({ summary: 'Lista los clientes disponibles para el usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Clientes disponibles segun rol y vendedor.' })
  async GetAllClientes(@CurrentUser('role') role: string, @CurrentUser('codven') codven: string) {
    return this.customersService.GetAllClientes(role,
      codven);
  }

  @Get(':codcliente')
  @ApiOperation({ summary: 'Obtiene un cliente por codigo' })
  @ApiParam({ name: 'codcliente', description: 'Codigo del cliente' })
  @ApiResponse({ status: 200, description: 'Detalle del cliente solicitado.' })
  async GetClienteByCode(@Param('codcliente') codcliente: string) {
    return this.customersService.GetCliente(codcliente);

  }

  @Get('zone/:codzone')
  @ApiOperation({ summary: 'Lista clientes por zona' })
  @ApiParam({ name: 'codzone', description: 'Codigo de la zona' })
  @ApiResponse({ status: 200, description: 'Clientes asociados a la zona indicada.' })
  async GetClientesZone(@Param('codzone') codzone: string) {
    return this.customersService.GetZoneClientes(codzone);
  }
}
