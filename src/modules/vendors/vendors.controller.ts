import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { VendorDto } from './dto/vendor.dto';
import { VendorsService } from './vendors.service';

@Controller('vendors')
@UseGuards(JwtAuthGuard)
@ApiTags('Vendors')
@ApiBearerAuth()
export class VendorsController {
  constructor(private readonly vendorsServise: VendorsService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos los vendedores' })
  @ApiResponse({ status: 200, description: 'Vendedores registrados.', type: VendorDto, isArray: true })
  async getAll(): Promise<VendorDto[]>{
    return this.vendorsServise.getAllVendors();
  }
  @Get(':codven')
  @ApiOperation({ summary: 'Obtiene un vendedor por codigo' })
  @ApiParam({ name: 'codven', description: 'Codigo del vendedor' })
  @ApiResponse({ status: 200, description: 'Detalle del vendedor solicitado.' })
  async getOne(@Param('codven') codven: string) {
    return this.vendorsServise.getVendorByCodven(codven);
  }
}
