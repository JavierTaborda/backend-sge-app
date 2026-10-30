import { ApiProperty } from '@nestjs/swagger';

export class DispatchItemDto {
  @ApiProperty({ example: 6242 })
  prednum: number;

  @ApiProperty({ example: 1 })
  itemnum: number;

  @ApiProperty({ example: 19665 })
  pednum: number;

  @ApiProperty({ example: 1 })
  rennum: number;

  @ApiProperty({ example: '0001' })
  codalma: string;

  @ApiProperty({ example: 'AVFR-12W' })
  codart: string;

  @ApiProperty({ type: String, nullable: true })
  artdes: string | null;

  @ApiProperty({ example: 'AVFR-12W - AIRE DE VENTANA FRIGILUX 12.000BTU' })
  Articulo: string;

  @ApiProperty({ type: String, nullable: true, example: '7590020007163' })
  refbarra: string | null;

  @ApiProperty({ example: 0, enum: [0, 1] })
  compuesto: number;

  @ApiProperty({ example: true })
  manjser: boolean;

  @ApiProperty({ type: String, nullable: true })
  codbarra: string | null;

  @ApiProperty({ type: String, nullable: true })
  serial1: string | null;

  @ApiProperty({ example: '0' })
  recouser: string;

  @ApiProperty({ type: String, nullable: true })
  supervisor: string | null;

  @ApiProperty({ type: String, nullable: true, example: null })
  horacapture: string | null;

  @ApiProperty({ example: false })
  changed: false;

  @ApiProperty({ example: false })
  selected: false;

  @ApiProperty({ example: 'None', enum: ['None'] })
  objectstate: 'None';

  @ApiProperty({ example: 'sap-icon://None', enum: ['sap-icon://None'] })
  objecticon: 'sap-icon://None';

  @ApiProperty({ type: String, nullable: true, example: 'Sin serial' })
  lectura: 'Sin serial' | null;

  @ApiProperty({ example: 'Warning', enum: ['Warning'] })
  objectstate2: 'Warning';
}

export class DispatchOrderDto {
  @ApiProperty({ example: 6242 })
  prednum: number;

  @ApiProperty({ example: 19665 })
  pednum: number;

  @ApiProperty({ example: 'En despacho', enum: ['En despacho', 'Finalizado'] })
  conformado: 'En despacho' | 'Finalizado';

  @ApiProperty({ example: '2026-10-23 09:32:56' })
  fecdesp: string;

  @ApiProperty({ type: String, nullable: true })
  fecfinalStr: string | null;

  @ApiProperty({ type: String, nullable: true, format: 'date-time' })
  fecfinal: string | null;

  @ApiProperty({ type: String, nullable: true, example: '01:30:00' })
  duracion: string | null;

  @ApiProperty({ example: '00734' })
  co_cli: string;

  @ApiProperty({ type: String, nullable: true })
  Cliente: string | null;

  @ApiProperty({ example: '0002' })
  co_zon: string;

  @ApiProperty({ type: String, nullable: true, example: 'TACHIRA' })
  Zona: string | null;

  @ApiProperty({ example: '00004' })
  co_ven: string;

  @ApiProperty({ type: String, nullable: true })
  Vendedor: string | null;

  @ApiProperty({ example: 9 })
  cantdesp: number;

  @ApiProperty({ example: '43' })
  owneruser: string;

  @ApiProperty({
    type: String,
    nullable: true,
    description: 'Sin tabla de usuarios configurada; se devuelve null',
  })
  supervisor: string | null;
}

export class DispatchOrderWithItemsDto extends DispatchOrderDto {
  @ApiProperty({ type: DispatchItemDto, isArray: true })
  items: DispatchItemDto[];
}
