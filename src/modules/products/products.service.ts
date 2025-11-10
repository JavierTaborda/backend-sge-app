import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

@Injectable()
export class ProductsService {
  constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) { }
  async getProducts(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.sql.art.findMany({
        skip,
        take: limit,

        select: {
          co_art: true,
          art_des: true,
          co_cat: true,
          modelo: true,


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
  async getCategorys(page = 1, limit = 15) {
    const skip = (page - 1) * limit;

    const [categorys, total] = await Promise.all([
      this.mysql.clcategoria.findMany({
        skip,
        take: limit,

        select: {
          codcat: true,
          catdes: true,

        }
      }),
      this.mysql.clcategoria.count(),
    ]);

    return {
      data: categorys,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }
  async getProductsWithBarcode() {

    const products = await
      this.mysql.mtarticulos.findMany({

        select: {
          codart: true,
          artdes: true,
          codbarra: true

        },
        where: {
          anulado: false,
        }
      });

    const product = products.map((p) => ({
      co_art: p.codart,
      art_des: p.artdes,
      codbarra: p.codbarra,
    }))

    return product
  }
}
