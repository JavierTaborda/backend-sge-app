import { Controller, Get, Param } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorDto } from './dto/vendor.dto';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsServise: VendorsService) {}

  @Get()
  async getAll(){
    return this.vendorsServise.getAllVendors();
  }
  @Get(':codven')
  async getOne(@Param('codven') codven: string) {
    return this.vendorsServise.getVendorByCodven(codven);
  }
}
