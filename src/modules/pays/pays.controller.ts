import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Role } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import type { PlanifcacionPagos } from './interfaces/PlanificacionPagos';
import type { PlanPagosBase } from './interfaces/PlanPasgosBase';
import { PaysService } from './pays.service';
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('pays')
@ApiTags('Pays')
@ApiBearerAuth()
export class PaysController {
  constructor(private readonly paysService: PaysService) { }


  @Get('sumary')
  @ApiOperation({ summary: 'Obtiene el resumen de pagos por compania' })
  @ApiResponse({ status: 200, description: 'Resumen de pagos agrupado por compania.' })
  getSummaryByCompany() {
    return this.paysService.getSummaryByCompany();
  }
  @Get('methods')
  @ApiOperation({ summary: 'Lista metodos de pago' })
  @ApiResponse({ status: 200, description: 'Metodos de pago disponibles.' })
  findMethodPay() {
    return this.paysService.findMethodPay();
  }

  @Get('swift')
  @ApiOperation({ summary: 'Lista codigos SWIFT' })
  @ApiResponse({ status: 200, description: 'Codigos SWIFT disponibles.' })
  findSwift() {
    return this.paysService.findCodesSwift();
  }

  @Get()
  @ApiOperation({ summary: 'Lista documentos pendientes de pago' })
  @ApiResponse({ status: 200, description: 'Documentos pendientes disponibles para planificacion o autorizacion.' })
  getPendingDocs() {
    return this.paysService.getPendingDocs();
  }
  @Role('7','6')
  @Post()
  @ApiOperation({ summary: 'Autoriza documentos para pago' })
  @ApiBody({
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          numerodocumento: { type: 'number', example: 12345 },
          empresa: { type: 'string', example: 'EMPRESA' },
          beneficiario: { type: 'string', example: 'Proveedor' },
          montoautorizado: { type: 'number', example: 1500.25 },
          monedaautorizada: { type: 'string', example: 'USD' },
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Documentos autorizados correctamente.' })
  authorizedDocuments(@Body() createAuthDocumen: PlanPagosBase[],  @CurrentUser('role') role: string,): Promise<{
    success: boolean;
    total: number;
  }> {

    if (role === '6') {
      return Promise.resolve({ success: true, total: createAuthDocumen.length });
    }
    return this.paysService.authorizedDocuments(createAuthDocumen);
  }
  @Role('7','6')
  @Post('create-plan')
  @ApiOperation({ summary: 'Crea un plan de pagos' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        planpagonumero: { type: 'number', example: 1001 },
        unidad: { type: 'string', example: 'ADMIN' },
        empresa: { type: 'string', example: 'EMPRESA' },
        fechapagoautorizada: { type: 'string', format: 'date-time' },
        descripcionplan: { type: 'string', example: 'Plan semanal de pagos' },
        items: { type: 'array', items: { type: 'object' } },
      },
      required: ['planpagonumero', 'unidad', 'empresa', 'fechapagoautorizada', 'descripcionplan', 'items'],
    },
  })
  @ApiResponse({ status: 201, description: 'Plan de pagos creado correctamente.' })
  createPlan(@Body() createPlan: PlanifcacionPagos, @CurrentUser('role') role: string): Promise<{
    success: boolean;
    planpagonumero: number;
  }> {
    if (role === '6') {
      return Promise.resolve({ success: true, planpagonumero: createPlan.planpagonumero });
    }
    return this.paysService.createPlanPagos(createPlan);
  }
}
