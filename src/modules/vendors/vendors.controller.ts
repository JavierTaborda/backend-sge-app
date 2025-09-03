import { Controller, Get, Param } from '@nestjs/common';
import { VendorDto } from './dto/vendor.dto';
import { VendorsService } from './vendors.service';

@Controller('vendors')
// @UseGuards(JwtAuthGuard)
export class VendorsController {
  constructor(private readonly vendorsServise: VendorsService) {}

  @Get()
  async getAll(): Promise<VendorDto[]>{
    return this.vendorsServise.getAllVendors();
  }
  @Get(':codven')
  async getOne(@Param('codven') codven: string) {
    return this.vendorsServise.getVendorByCodven(codven);
  }
}
