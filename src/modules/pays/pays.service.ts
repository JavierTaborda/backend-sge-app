import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServerPrismaService } from 'src/database/sqlserver.service';
import { MethodPayDto } from './dto/method.pay.dto';

@Injectable()
export class PaysService {
  constructor(private readonly sql: SQLServerPrismaService, private readonly mysql: MySQLPrismaService) { }

  async findMethodPay() {
    const methods = await this.mysql.clbancopago.findMany(
      {
        select: {
          codigounico: true,
          textList: true,
          pagoporbanco: true,
          monedapago:true

        },
        orderBy: { orden: 'asc' }

      }


    )
    return plainToInstance(MethodPayDto, methods, {
      enableImplicitConversion: true,
    });
  }


}
