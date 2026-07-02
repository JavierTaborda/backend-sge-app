import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from './products.service';

@UseGuards(JwtAuthGuard)
@Controller('products')
@ApiTags('Products')
@ApiBearerAuth()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }
 
  @Get()
  @ApiOperation({ summary: 'Lista productos paginados' })
  @ApiQuery({ name: 'page', required: false, description: 'Pagina a consultar', example: '1' })
  @ApiQuery({ name: 'limit', required: false, description: 'Cantidad de registros por pagina', example: '10' })
  @ApiResponse({ status: 200, description: 'Productos paginados.' })
  async getAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.productsService.getProducts(+page, +limit);
  }
   @Get('codebar')
  @ApiOperation({ summary: 'Lista productos con codigo de barras' })
  @ApiResponse({ status: 200, description: 'Productos con codigo de barras.' })
  async getAllWithCodeBar() {
    return this.productsService.getProductsWithBarcode();
  }
  @Get('categorys')
  @ApiOperation({ summary: 'Lista categorias paginadas' })
  @ApiQuery({ name: 'page', required: false, description: 'Pagina a consultar', example: '1' })
  @ApiQuery({ name: 'limit', required: false, description: 'Cantidad de registros por pagina', example: '15' })
  @ApiResponse({ status: 200, description: 'Categorias paginadas.' })
  async getcategorys(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '15',
  ) {
    return this.productsService.getCategorys(+page, +limit);
  }

}
