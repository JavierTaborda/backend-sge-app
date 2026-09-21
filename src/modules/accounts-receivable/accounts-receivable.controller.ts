import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import {
  AccountReceivableRow,
  AccountReceivableSummary,
  AccountsReceivableService,
} from './accounts-receivable.service';

@Controller('accounts-receivable')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Accounts Receivable')
@ApiBearerAuth()
export class AccountsReceivableController {
  constructor(private readonly accountsReceivableService: AccountsReceivableService) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene las cuentas por cobrar de un cliente' })
  @ApiQuery({ name: 'co_cli', required: true, description: 'Codigo del cliente', example: '00187' })
  @ApiResponse({ status: 200, description: 'Cuentas por cobrar del cliente.', type: [Object] })
  findByClient(
    @Query('co_cli') clientCode?: string,
    @CurrentUser('role') role?: string,
    @CurrentUser('codven') codven?: string,
  ): Promise<AccountReceivableRow[]> {
    return this.accountsReceivableService.findByClient(clientCode, role, codven);
  }

  @Get('all')
  @ApiOperation({ summary: 'Obtiene las cuentas por cobrar de todos los clientes' })
  @ApiResponse({ status: 200, description: 'Resumen de cuentas por cobrar por cliente.', type: [Object] })
  findAll(
    @CurrentUser('role') role?: string,
    @CurrentUser('codven') codven?: string,
  ): Promise<AccountReceivableSummary[]> {
    
    return this.accountsReceivableService.findAll(role, codven);
  }
}