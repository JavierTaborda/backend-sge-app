import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import type { PlanifcacionPagos } from './interfaces/PlanificacionPagos';
import type { PlanPagosBase } from './interfaces/PlanPasgosBase';
import { PaysService } from './pays.service';
@UseGuards(JwtAuthGuard)
@Controller('pays')
export class PaysController {
  constructor(private readonly paysService: PaysService) { }


  @Get('sumary')
  getSummaryByCompany() {
    return this.paysService.getSummaryByCompany ();
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
  @Post()
  authorizedDocuments(@Body() createAuthDocumen: PlanPagosBase[]): Promise<{
    success: boolean;
    total: number;
  }> {
    return this.paysService.authorizedDocuments(createAuthDocumen);
  }
  @Post('create-plan')
  createPlan(@Body() createPlan: PlanifcacionPagos): Promise<{
    success: boolean;
    planpagonumero: number;
  }> {
    return this.paysService.createPlanPagos(createPlan);
  }
}
