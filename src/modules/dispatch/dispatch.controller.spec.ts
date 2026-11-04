import {
  INestApplication,
  NotFoundException,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Test } from '@nestjs/testing';
import type { Server } from 'node:http';
import request from 'supertest';
import { DispatchController } from './dispatch.controller';
import { DispatchService } from './dispatch.service';
import type {
  DispatchItemDto,
  DispatchOrderDto,
} from './dtos/dispatch-order.dto';

describe('DispatchController HTTP', () => {
  let app: INestApplication<Server>;
  const order: DispatchOrderDto = {
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
  };
  const item: DispatchItemDto = {
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
  };
  const service = {
    getBarcodesWithoutSerial: jest.fn().mockReturnValue([]),
    getOrders: jest.fn().mockResolvedValue([]),
    getOrdersWithItems: jest.fn().mockResolvedValue([]),
    getOrder: jest.fn().mockResolvedValue(order),
    getOrderItems: jest.fn().mockResolvedValue([item]),
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [DispatchController],
      providers: [{ provide: DispatchService, useValue: service }],
    }).compile();
    app = module.createNestApplication<INestApplication<Server>>();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  beforeEach(() => {
    service.getBarcodesWithoutSerial
      .mockReset()
      .mockReturnValue([]);
    service.getOrders.mockReset().mockResolvedValue([]);
    service.getOrdersWithItems.mockReset().mockResolvedValue([]);
    service.getOrder.mockReset().mockResolvedValue(order);
    service.getOrderItems.mockReset().mockResolvedValue([item]);
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns articles whose barcodes do not require serials', async () => {
    const barcodes = ['7590020010965', '7590020010972'];
    service.getBarcodesWithoutSerial.mockReturnValueOnce(barcodes);

    await request(app.getHttpServer())
      .get('/api/dispatch/list')
      .expect(200, barcodes);

    expect(service.getBarcodesWithoutSerial).toHaveBeenCalledWith();
  });

  it('returns a header list with the exact casing and no nested items', async () => {
    const orders = [
      order,
      { ...order, prednum: 6243, pednum: 19641, cantdesp: 14 },
    ];
    service.getOrders.mockResolvedValueOnce(orders);

    await request(app.getHttpServer())
      .get('/api/dispatch/orders')
      .expect(200, orders);

    expect(service.getOrders).toHaveBeenCalledWith();
    expect(service.getOrderItems).not.toHaveBeenCalled();
  });

  it('accepts a complete scanned predispatch JSON body', async () => {
    const payload = {
      ...order,
      items: [{ ...item, serial1: 'SERIAL-1' }],
    };

    await request(app.getHttpServer())
      .post('/api/dispatch/orders/predispatch')
      .send(payload)
      .expect(202, { received: true });
  });

  it('rejects a predispatch body without the header and items shape', async () => {
    await request(app.getHttpServer())
      .post('/api/dispatch/orders/predispatch')
      .send({ prednum: 6242, pednum: 19665, items: null })
      .expect(400);
  });

  it('returns an empty list when no headers exist', async () => {
    await request(app.getHttpServer())
      .get('/api/dispatch/orders')
      .expect(200, []);
  });

  it('returns dispatch headers with their scanned items nested', async () => {
    const orders = [{ ...order, items: [item] }];
    service.getOrdersWithItems.mockResolvedValueOnce(orders);

    await request(app.getHttpServer())
      .get('/api/dispatch/orders/with-items')
      .expect(200, orders);

    expect(service.getOrdersWithItems).toHaveBeenCalledWith();
  });

  it.each([
    'prednum=6242',
    'pednum=19665',
    'prednum=6242&pednum=19665',
    'prednum=abc&pednum=-1',
  ])('ignores query parameters on the general route: %s', async (query) => {
    service.getOrders.mockResolvedValueOnce([order]);

    await request(app.getHttpServer())
      .get(`/api/dispatch/orders?${query}`)
      .expect(200, [order]);
    expect(service.getOrders).toHaveBeenCalledWith();
  });

  it('returns a single header by both required numbers', async () => {
    await request(app.getHttpServer())
      .get('/api/dispatch/orders/6242/19665')
      .expect(200, order);

    expect(service.getOrder).toHaveBeenCalledWith(6242, 19665);
    expect(service.getOrders).not.toHaveBeenCalled();
    expect(service.getOrderItems).not.toHaveBeenCalled();
  });

  it('returns the attached item structure on the dedicated items route', async () => {
    await request(app.getHttpServer())
      .get('/api/dispatch/orders/6242/19665/items')
      .expect(200, [item]);

    expect(service.getOrderItems).toHaveBeenCalledWith(6242, 19665);
    expect(service.getOrder).not.toHaveBeenCalled();
    expect(service.getOrders).not.toHaveBeenCalled();
  });

  it.each([
    'abc/19665',
    '0/19665',
    '-1/19665',
    '1.5/19665',
    '2147483648/19665',
    '6242/abc',
    '6242/0',
    '6242/-1',
    '6242/1.5',
    '6242/2147483648',
  ])('rejects invalid numbers in both detail routes: %s', async (params) => {
    for (const suffix of ['', '/items']) {
      await request(app.getHttpServer())
        .get(`/api/dispatch/orders/${params}${suffix}`)
        .expect(400);
    }
    expect(service.getOrder).not.toHaveBeenCalled();
    expect(service.getOrderItems).not.toHaveBeenCalled();
  });

  it('requires both numbers', async () => {
    await request(app.getHttpServer())
      .get('/api/dispatch/orders/6242')
      .expect(404);
  });

  it('returns 404 for a missing or annulled individual header', async () => {
    service.getOrder.mockRejectedValueOnce(
      new NotFoundException('Despacho no encontrado'),
    );
    await request(app.getHttpServer())
      .get('/api/dispatch/orders/6242/19665')
      .expect(404);
  });

  it('returns 404 for content belonging to a missing or annulled header', async () => {
    service.getOrderItems.mockRejectedValueOnce(
      new NotFoundException('Despacho no encontrado'),
    );
    await request(app.getHttpServer())
      .get('/api/dispatch/orders/6242/19665/items')
      .expect(404);
  });

  it('documents exact header and item names with no general query filters', () => {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder().build(),
    );
    expect(
      document.paths['/api/dispatch/orders'].get?.parameters ?? [],
    ).toEqual([]);
    expect(
      document.paths['/api/dispatch/orders/{prednum}/{pednum}/items'].get
        ?.parameters,
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'prednum',
          in: 'path',
          required: true,
        }),
        expect.objectContaining({ name: 'pednum', in: 'path', required: true }),
      ]),
    );
    const headerSchema = document.components?.schemas?.DispatchOrderDto;
    const itemSchema = document.components?.schemas?.DispatchItemDto;
    if (
      !headerSchema ||
      !('properties' in headerSchema) ||
      !itemSchema ||
      !('properties' in itemSchema)
    ) {
      throw new Error('No se generaron los esquemas de cabecera y contenido');
    }
    expect(Object.keys(headerSchema.properties ?? {}).sort()).toEqual(
      Object.keys(order).sort(),
    );
    expect(Object.keys(itemSchema.properties ?? {}).sort()).toEqual(
      Object.keys(item).sort(),
    );
    expect(itemSchema.properties).toMatchObject({
      changed: { type: 'boolean' },
      selected: { type: 'boolean' },
      manjser: { type: 'boolean' },
      compuesto: { type: 'number' },
    });
  });
});
