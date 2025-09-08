import { SQLServerPrismaService } from '../../database/sqlserver.service';
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    const mockSql = {
      pedidos: {
        findMany: jest
          .fn()
          .mockResolvedValue([{ tot_neto: 100, tasa: 5, reng_ped: [] }]),
      },
    } as unknown as SQLServerPrismaService;

    service = new OrdersService(mockSql);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert tot_neto to dollars', async () => {
    const result = await service.GetPedidos();
    expect(result[0].tot_neto).toBe(20); // 100 / 5
  });
});
