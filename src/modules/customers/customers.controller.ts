import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CustomersService } from './customers.service';

@UseGuards(JwtAuthGuard)
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Get()
  async GetAllClientes(@CurrentUser('role') role: string, @CurrentUser('codven') codven: string) {
    return this.customersService.GetAllClientes(role,
      codven);
  }

  @Get(':codcliente')
  async GetClienteByCode(@Param('codcliente') codcliente: string) {
    return this.customersService.GetCliente(codcliente);

  }

  @Get('zone/:codzone')
  async GetClientesZone(@Param('codzone') codzone: string) {
    return this.customersService.GetZoneClientes(codzone);
  }
}
