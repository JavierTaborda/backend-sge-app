import { Injectable } from '@nestjs/common';
import { SQLServerPrismaService } from '../../database/sqlserver.service';
import { PedidoDto } from './dtos/pedido.dto';
import { DateUtils } from 'src/utils/date.utils';

@Injectable()
export class OrdersService {
  constructor(private readonly sql: SQLServerPrismaService) {}

  async GetPedidos() {
    const {start, end}=DateUtils.getCurrentMonthRange();
    return this.sql.pedidos.findMany({
      where: {
        fec_emis: {
          gte: start,//gte: since / desde
          lte: end,//lte: to / hasta 
        },
      },
      include: { reng_ped: true },
    });
  }
}
