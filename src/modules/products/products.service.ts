import { Injectable } from '@nestjs/common';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

@Injectable()
export class ProductsService {
  constructor(private readonly sql: SQLServerPrismaService) {}

  async getProducts(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.sql.art.findMany({
        skip,
        take: limit,

        select:{
          co_art:true,
          art_des:true,
          co_cat:true,
          modelo:true,
          

        }
      }),
      this.sql.art.count(),
    ]);

    return {
      data: products,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }
}
