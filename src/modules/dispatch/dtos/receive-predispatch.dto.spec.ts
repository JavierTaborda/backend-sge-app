import { ValidationPipe } from '@nestjs/common';
import { ReceivePredispatchDto } from './receive-predispatch.dto';

describe('ReceivePredispatchDto capture time validation', () => {
  const pipe = new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  });
  const item = {
    prednum: 6119,
    pednum: 19528,
    itemnum: 1,
    rennum: 1,
    codalma: '0001',
    codart: 'ASFR-12FB-I',
    compuesto: 1,
    manjser: true,
    codbarra: null,
    serial1: null,
    refbarra: null,
  };
  const validate = (horacapture: unknown) =>
    pipe.transform(
      {
        prednum: item.prednum,
        pednum: item.pednum,
        fecdesp: '2026-11-11 10:26:49',
        items: Array.from({ length: 7 }, (_, index) => ({
          ...item,
          itemnum: index + 1,
          horacapture,
        })),
      },
      { type: 'body', metatype: ReceivePredispatchDto },
    );

  it.each([
    '00:00:00',
    '10:26:49',
    '23:59:59',
    '2026-11-11T14:26:49.000Z',
    '2026-11-11T10:26:49-04:00',
    null,
  ])('accepts and preserves capture value %s for all items', async (value) => {
    await expect(validate(value)).resolves.toMatchObject({
      items: Array.from({ length: 7 }, () => ({ horacapture: value })),
    });
  });

  it.each([
    '24:00:00',
    '10:60:00',
    '10:26:60',
    '10:26',
    '10:26: 49',
    'not-a-date',
    '',
    102649,
    {},
    undefined,
  ])('rejects invalid capture value %p on every item', async (value) => {
    await expect(validate(value)).rejects.toMatchObject({
      response: {
        statusCode: 400,
        message: Array.from(
          { length: 7 },
          (_, index) =>
            `items.${index}.horacapture debe ser una hora valida en formato HH:mm:ss o una fecha ISO 8601`,
        ),
      },
    });
  });
});
