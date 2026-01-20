import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlanPagosBase } from './interfaces/PlanPasgosBase';
import { PaysService } from './pays.service';

@Controller('pays')
export class PaysController {
  constructor(private readonly paysService: PaysService) {}

  @Get('methods')
  findMethodPay() {
    return this.paysService.findMethodPay();
  }

  @Get('documents')
  getPendingDocs() {
    return this.paysService.getPendingDocs();
  }
  @Post()
  authorizedDocuments(@Body() createAuthDocumen: PlanPagosBase[]) {
    return this.paysService.authorizedDocuments(createAuthDocumen);
  }
}
