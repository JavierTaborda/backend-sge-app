import { Injectable } from '@nestjs/common';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';

@Injectable()
export class WarehousesService {
      constructor(private readonly sql: SQLServerPrismaService) {}

      async getAlmacenes(){
        const result = this.sql.almacenes.findMany()
        return result;
      }
}
