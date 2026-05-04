import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Role } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import type { PlanifcacionPagos } from './interfaces/PlanificacionPagos';
import type { PlanPagosBase } from './interfaces/PlanPasgosBase';
import { PaysService } from './pays.service';
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('pays')
export class PaysController {
  constructor(private readonly paysService: PaysService) { }


  @Get('sumary')
  getSummaryByCompany() {
    return this.paysService.getSummaryByCompany();
  }
  @Get('methods')
  findMethodPay() {
    return this.paysService.findMethodPay();
  }

  @Get('swift')
  findSwift() {
    return this.paysService.findCodesSwift();
  }

  @Get()
  getPendingDocs() {
    return this.paysService.getPendingDocs();
  }
  @Role('7','6')
  @Post()
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
