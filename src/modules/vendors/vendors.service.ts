import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/services/mysql.service';
import { VendorDto } from './dto/vendor.dto';

@Injectable()
export class VendorsService {
  constructor(private readonly mysql: MySQLPrismaService) {}

  async getAllVendors(): Promise<VendorDto[]> {
    return this.mysql.$queryRaw<
      VendorDto[]
    >`SELECT * FROM clvendedores WHERE activo = true`;
  }
  async getVendorByCodven(codven: string): Promise<VendorDto[]> {
    return this.mysql.$queryRaw<
      VendorDto[]
    >`SELECT * FROM clvendedores WHERE codven = ${codven}`;
  }
}
