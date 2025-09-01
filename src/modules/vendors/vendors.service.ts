import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { VendorDto } from './dto/vendor.dto';

@Injectable()
export class VendorsService {
  constructor(private readonly sql: SQLServerPrismaService) {}
  async getAllVendors(): Promise<VendorDto[]> {
    const vendors = await this.sql.vendedor.findMany({
      where: {
        tipo: 'A',
        condic: false,
        trasnfe: '1',
      },
    });

    const cleanVendors = vendors.map((v) => ({
      cod_ven: v.co_ven,
      ven_des: v.ven_des ?? '', 
    }));

    return plainToInstance(VendorDto, cleanVendors);
  }

  async getVendorByCodven(codven: string) {
    return this.sql.vendedor.findUnique({
      where: {
        co_ven: codven,
      },
    });
  }
}
