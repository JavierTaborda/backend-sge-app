import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { MySQLPrismaService } from '../../database/mysql.service';
import { Prisma } from '../../prisma-clients/mysql/client';
import { DispatchService } from './dispatch.service';

describe('DispatchService', () => {
  let service: DispatchService;
  const mysql = {
    $queryRaw: jest.fn<Promise<unknown[]>, [Prisma.Sql]>(),
  };
  const header = {
    prednum: 6242,
    pednum: 19665,
    conformado: 'En despacho',
    fecdesp: '2026-10-23 09:32:56',
    fecfinalStr: null,
    fecfinal: null,
    durationSeconds: null,
    co_cli: '00734',
    Cliente: 'CLIENTE EJEMPLO',
    co_zon: '0002',
    Zona: 'TACHIRA',
    co_ven: '00004',
    Vendedor: 'VENDEDOR EJEMPLO',
    cantdesp: 9,
    owneruser: '43',
    supervisor: null,
  };
  const unit = {
    prednum: 6242,
    itemnum: 1,
    pednum: 19665,
    rennum: 1,
    codalma: '0001',
    codart: 'AVFR-12W',
    artdes: 'AIRE DE VENTANA FRIGILUX',
    refbarra: '7590020007163',
    compuesto: 0,
    manjser: 1,
    codbarra: null,
    serial1: null,
    recouser: '0',
    supervisor: null,
    horacapture: null,
  };

  beforeEach(async () => {
    mysql.$queryRaw.mockReset();
    const module = await Test.createTestingModule({
      providers: [
        DispatchService,
        { provide: MySQLPrismaService, useValue: mysql },
      ],
    }).compile();
    service = module.get(DispatchService);
  });

  it('returns exactly the requested header fields without legacy names or items', async () => {
    mysql.$queryRaw.mockResolvedValue([header]);

    await expect(service.getOrders()).resolves.toEqual([
      {
        prednum: 6242,
        pednum: 19665,
        conformado: 'En despacho',
        fecdesp: '2026-10-23 09:32:56',
        fecfinalStr: null,
        fecfinal: null,
        duracion: null,
        co_cli: '00734',
        Cliente: 'CLIENTE EJEMPLO',
        co_zon: '0002',
        Zona: 'TACHIRA',
        co_ven: '00004',
        Vendedor: 'VENDEDOR EJEMPLO',
        cantdesp: 9,
        owneruser: '43',
        supervisor: null,
      },
    ]);
  });

  it('returns headers with nested items using a single batch item query', async () => {
    mysql.$queryRaw
      .mockResolvedValueOnce([header])
      .mockResolvedValueOnce([unit]);

    await expect(service.getOrdersWithItems()).resolves.toMatchObject([
      {
        prednum: 6242,
        pednum: 19665,
        items: [
          {
            itemnum: 1,
            codart: 'AVFR-12W',
            serial1: null,
            lectura: null,
          },
        ],
      },
    ]);

    expect(mysql.$queryRaw).toHaveBeenCalledTimes(2);
    const [itemQuery] = mysql.$queryRaw.mock.calls[1];
    expect(itemQuery.sql).toContain('(m.prednum, m.pednum) IN ((?, ?))');
    expect(itemQuery.sql).toContain('(d.prednum, d.pednum) IN ((?, ?))');
    expect(itemQuery.values).toEqual([6242, 19665, 6242, 19665]);
  });

  it('does not query items when no active dispatch headers exist', async () => {
    mysql.$queryRaw.mockResolvedValueOnce([]);

    await expect(service.getOrdersWithItems()).resolves.toEqual([]);
    expect(mysql.$queryRaw).toHaveBeenCalledTimes(1);
  });

  it('returns all matching headers without filtering by number or limiting rows', async () => {
    mysql.$queryRaw.mockResolvedValue([]);

    await expect(service.getOrders()).resolves.toEqual([]);

    const [query] = mysql.$queryRaw.mock.calls[0];
    expect(query.values).toEqual([]);
    expect(query.sql).toMatch(
      /WHERE h\.anulado = 0 AND \(h\.estatus IN \(0, 1\) OR \(h\.cerrado = 1 AND h\.fecfinal >= CURDATE\(\) AND h\.fecfinal < CURDATE\(\) \+ INTERVAL 1 DAY\)\)\s+ORDER BY h\.prednum DESC, h\.pednum ASC\s*\)/,
    );
    expect(query.sql).not.toMatch(/\bLIMIT\b/);
    expect(query.sql).not.toMatch(/h\.(prednum|pednum)\s*=\s*\?/);
    expect(query.sql).not.toMatch(/\b(mvpredes|dtpredes)\b/);
    expect(query.sql).toContain('LEFT JOIN clzonas z ON z.codzon = h.codzon');
    expect(query.sql).toContain('u.userUsername AS supervisor');
    expect(query.sql).toContain('LEFT JOIN sge.users u ON u.userId = h.owneruser');
    expect(query.sql).toContain("NULLIF(TRIM(z.zondes), '') AS Zona");
    expect(query.sql).toContain("THEN 'Finalizado' ELSE 'En despacho'");
    expect(query.sql).toContain('h.estatus IN (0, 1)');
    expect(query.sql).toContain('h.cerrado = 1');
    expect(query.sql).toContain('h.fecfinal >= CURDATE()');
    expect(query.sql).toContain('h.fecfinal < CURDATE() + INTERVAL 1 DAY');
  });

  it('returns one header using both numbers without a list limit', async () => {
    mysql.$queryRaw.mockResolvedValue([header]);

    const order = await service.getOrder(6242, 19665);
    const [query] = mysql.$queryRaw.mock.calls[0];

    expect(order.prednum).toBe(6242);
    expect(order.pednum).toBe(19665);
    expect(order).not.toHaveProperty('items');
    expect(query.values).toEqual([6242, 19665]);
    expect(query.sql).toContain(
      'h.anulado = 0 AND h.estatus <> 2 AND h.prednum = ? AND h.pednum = ?',
    );
    expect(query.sql).not.toContain('h.fecfinal >= CURDATE()');
    expect(query.sql).not.toMatch(/\bLIMIT\b/);
  });

  it.each([
    [0, '00:00:00'],
    [5405, '01:30:05'],
    [90000, '25:00:00'],
    [3600000n, '1000:00:00'],
    [-60, '-00:01:00'],
  ])(
    'formats duration %s without wrapping or clamping it',
    async (durationSeconds, duracion) => {
      mysql.$queryRaw.mockResolvedValue([
        {
          ...header,
          conformado: 'Finalizado',
          fecfinalStr: '2026-10-23 11:03:01',
          fecfinal: new Date('2026-10-23T11:03:01.000Z'),
          durationSeconds,
        },
      ]);

      const [order] = await service.getOrders();

      expect(order).toMatchObject({
        conformado: 'Finalizado',
        fecfinalStr: '2026-10-23 11:03:01',
        fecfinal: '2026-10-23T11:03:01.000Z',
        duracion,
      });
      expect(order).not.toHaveProperty('durationSeconds');
    },
  );

  it('keeps missing master data null', async () => {
    mysql.$queryRaw.mockResolvedValue([
      { ...header, Cliente: null, Zona: null, Vendedor: null },
    ]);

    const [order] = await service.getOrders();

    expect(order).toMatchObject({
      Cliente: null,
      Zona: null,
      Vendedor: null,
      supervisor: null,
    });
  });

  it('returns exactly the attached item shape and keeps barcode fields separate', async () => {
    mysql.$queryRaw
      .mockResolvedValueOnce([header])
      .mockResolvedValueOnce([unit]);

    await expect(service.getOrderItems(6242, 19665)).resolves.toEqual([
      {
        prednum: 6242,
        itemnum: 1,
        pednum: 19665,
        rennum: 1,
        codalma: '0001',
        codart: 'AVFR-12W',
        artdes: 'AIRE DE VENTANA FRIGILUX',
        Articulo: 'AVFR-12W - AIRE DE VENTANA FRIGILUX',
        refbarra: '7590020007163',
        compuesto: 0,
        manjser: true,
        codbarra: null,
        serial1: null,
        recouser: '0',
        supervisor: null,
        horacapture: null,
        changed: false,
        selected: false,
        objectstate: 'None',
        objecticon: 'sap-icon://None',
        lectura: null,
        objectstate2: 'Warning',
      },
    ]);
  });

  it.each([false, 0, 0n])(
    'sets Sin serial for the flag %s',
    async (manjser) => {
      mysql.$queryRaw
        .mockResolvedValueOnce([header])
        .mockResolvedValueOnce([
          {
            ...unit,
            manjser,
            compuesto: true,
            artdes: null,
          },
        ]);

      const [item] = await service.getOrderItems(6242, 19665);

      expect(item).toMatchObject({
        manjser: false,
        compuesto: 1,
        Articulo: 'AVFR-12W',
        artdes: null,
        lectura: 'Sin serial',
      });
    },
  );

  it('preserves captured serial, user and capture time with initial UI states', async () => {
    mysql.$queryRaw.mockResolvedValueOnce([header]).mockResolvedValueOnce([
      {
        ...unit,
        manjser: true,
        serial1: 'SERIAL-1',
        codbarra: 'SCANNED',
        recouser: '7',
        horacapture: '10:15:30',
      },
    ]);

    const [item] = await service.getOrderItems(6242, 19665);

    expect(item).toMatchObject({
      serial1: 'SERIAL-1',
      codbarra: 'SCANNED',
      recouser: '7',
      horacapture: '10:15:30',
      changed: false,
      selected: false,
      objectstate: 'None',
      objectstate2: 'Warning',
      lectura: null,
    });
  });

  it('does not limit item rows or collapse repeated SKUs', async () => {
    mysql.$queryRaw.mockResolvedValueOnce([header]).mockResolvedValueOnce(
      Array.from({ length: 52 }, (_, index) => ({
        ...unit,
        itemnum: index + 1,
      })),
    );

    const items = await service.getOrderItems(6242, 19665);
    const [query] = mysql.$queryRaw.mock.calls[1];

    expect(items).toHaveLength(52);
    expect(new Set(items.map((item) => item.itemnum)).size).toBe(52);
    expect(query.sql).not.toMatch(/\bLIMIT\b/);
    expect(query.values).toEqual([6242, 19665, 6242, 19665]);
    expect(query.sql).toContain('m.prednum = ? AND m.pednum = ?');
    expect(query.sql).toContain('d.prednum = ? AND d.pednum = ?');
    expect(query.sql).toContain('mvpredes m');
    expect(query.sql).toContain('dtpredes d');
    expect(query.sql).toContain('WHERE NOT (\n          h.cerrado = 1');
    expect(query.sql).toContain('h.fecfinal >= CURDATE()');
    expect(query.sql).toContain('h.fecfinal < CURDATE() + INTERVAL 1 DAY');
    expect(query.sql).toContain('u.userUsername AS supervisor');
    expect(query.sql).toContain('u.userId = i.recouser');
  });

  it('returns an empty item list for an existing header with no units', async () => {
    mysql.$queryRaw.mockResolvedValueOnce([header]).mockResolvedValueOnce([]);

    await expect(service.getOrderItems(6242, 19665)).resolves.toEqual([]);
  });

  it('returns 404 before fetching items for a missing or annulled header', async () => {
    mysql.$queryRaw.mockResolvedValue([]);

    await expect(service.getOrderItems(6242, 19665)).rejects.toThrow(
      NotFoundException,
    );
    expect(mysql.$queryRaw).toHaveBeenCalledTimes(1);
  });

  it('returns 404 for a missing or annulled individual header', async () => {
    mysql.$queryRaw.mockResolvedValue([]);

    await expect(service.getOrder(6242, 19665)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('propagates query failures instead of returning empty success responses', async () => {
    const error = new Error('Database unavailable');
    mysql.$queryRaw.mockRejectedValue(error);

    await expect(service.getOrders()).rejects.toBe(error);
    await expect(service.getOrder(6242, 19665)).rejects.toBe(error);
    await expect(service.getOrderItems(6242, 19665)).rejects.toBe(error);
  });

  it('propagates item query errors after a successful header lookup', async () => {
    const error = new Error('Item query unavailable');
    mysql.$queryRaw
      .mockResolvedValueOnce([header])
      .mockRejectedValueOnce(error);

    await expect(service.getOrderItems(6242, 19665)).rejects.toBe(error);
  });
});
