import { Injectable } from '@nestjs/common';
import { SQLServerPrismaService } from '../../database/sqlserver.service';
import { PedidoDto } from './dtos/pedido.dto';
import { DateUtils } from 'src/utils/date.utils';

@Injectable()
export class OrdersService {
  constructor(private readonly sql: SQLServerPrismaService) {}

  async GetPedidos(): Promise<PedidoDto[]> {
    const { start, end } = DateUtils.getCurrentMonthRange();
    return this.sql.pedidos.findMany({
      where: {
        fec_emis: {
          gte: start, //gte: since / desde
          lte: end, //lte: to / hasta
        },
      },
      include: { reng_ped: true },
    });
  }

  async GetPedidosFilters(
    dateIni?: Date,
    dateEnd?: Date,
    estatus?: string,
    cancelled?: boolean,
    vendor?: string,
    //zone?: string
  ) {
    //build the where before the sql command
    const where: any = {};

    // Filter by two dates only
    if (dateIni && dateEnd) {
      where.fec_emis = {
        gte: dateIni,
        lte: dateEnd,
      };
    }

    if (estatus) {
      where.revisado = estatus;
    }

    if (typeof cancelled === 'boolean') {
      where.anulada = cancelled;
    }

    if (vendor) {
      where.co_ven = vendor;
    }

    return this.sql.pedidos.findMany({ where });
  }
}
