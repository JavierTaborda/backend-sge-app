import { Injectable } from '@nestjs/common';
import { VendorDto } from './dto/vendor.dto';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

@Injectable()
export class VendorsService {
  constructor(private readonly sql: SQLServerPrismaService) {}

  async getAllVendors() {
    return this.sql.vendedor.findMany({
      where: {
        tipo: 'A',
        condic: false,
        trasnfe: '1',
      },
    });
  }

  async getVendorByCodven(codven: string){
    return this.sql.vendedor.findUnique({
      where: {
        co_ven: codven,
      },
    });
  }
}
