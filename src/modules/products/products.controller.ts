import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from './products.service';

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }
  @Get()
  async getAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.productsService.getProducts(+page, +limit);
  }
  @Get('categorys')
  async getcategorys(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '15',
  ) {
    return this.productsService.getCategorys(+page, +limit);
  }

}
