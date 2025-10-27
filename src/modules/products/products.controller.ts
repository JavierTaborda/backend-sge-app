import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

// @UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsServise: ProductsService) {}
  @Get()
  async getAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.productsServise.getProducts(+page, +limit);
  }
  @Get('categorys')
  async getcategorys(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '15',
  ) {
    return this.productsServise.getCategorys(+page, +limit);
  }
  
}
