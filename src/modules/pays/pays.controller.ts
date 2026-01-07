import { Controller, Get } from '@nestjs/common';
import { PaysService } from './pays.service';


@Controller('pays')
export class PaysController {
  constructor(private readonly paysService: PaysService) {}


  @Get("methods")
  findMethodPay() {
    return this.paysService.findMethodPay();
  }




}
