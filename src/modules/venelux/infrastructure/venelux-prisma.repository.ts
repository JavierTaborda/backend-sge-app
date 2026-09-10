import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from 'src/database/mysql.service';
import { SQLServer2PrismaService } from 'src/database/sqlserver2.service';
import { VeneluxRepository } from '../domain/interfaces/venelux.repository';
import { CreateVeneluxDetail } from '../domain/types/create-venelux-detail.type';
import { CreateVeneluxHeader } from '../domain/types/create-venelux-header.type';
import { CreateVeneluxMovement } from '../domain/types/create-venelux-movement.type';
import { CreateVeneluxSolicitud } from '../domain/types/create-venelux-solicitud.type';
import { SaArticuloMaterial } from '../domain/types/saarticulo-material.type';
import { VeneluxMaterial } from '../domain/types/venelux-material.type';
import { VeneluxSolicitudStatusSummary, VeneluxSolicitudWithMaterials } from '../domain/types/venelux-solicitud-with-materials.type';
import { VeneluxUnit } from '../domain/types/venelux-unit.type';

type RawQueryable = {
  $queryRaw<T = unknown>(query: TemplateStringsArray, ...values: unknown[]): Promise<T>;
};

const VENELUX_SOLICITUD_STATUS_LABELS: Record<number, string> = {
  0: 'Por autorizar',
  1: 'Autorizada solicitud',
  2: 'Autorizado despacho',
  3: 'En despacho',
  4: 'Autorizado comprar',
  5: 'En compra',
  6: 'Anulado',
};

@Injectable()
export class VeneluxPrismaRepository implements VeneluxRepository {
  constructor(private readonly sql: SQLServer2PrismaService, private readonly mysql: MySQLPrismaService,) { }

  private async getNextSolicitudNumero(client: RawQueryable): Promise<string> {
    const [row] = await client.$queryRaw<Array<{ solicitudnumero: number | bigint | string | null }>>`
      SELECT solicitudnumero
      FROM cbsolicimat
      ORDER BY solicitudnumero DESC
      LIMIT 1
      FOR UPDATE;
    `;

    return String(Number(row?.solicitudnumero ?? 0) + 1);
  }

  private async getCbsolicimatColumns(): Promise<Set<string>> {
    const columns = await this.mysql.$queryRaw<Array<{ column_name: string }>>`
      SELECT COLUMN_NAME AS column_name
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = DATABASE()
        AND TABLE_NAME = 'cbsolicimat';
    `;

    return new Set(columns.map((item) => item.column_name.toLowerCase()));
  }

  private buildSolicitudStatusSql(availableColumns: Set<string>) {
    const isTrue = (column: string) => availableColumns.has(column)
      ? `COALESCE(h.${column}, 0) = 1`
      : 'FALSE';
    const dateValue = (column: string) => availableColumns.has(column)
      ? `h.${column}`
      : 'NULL';
    const fallbackDate = availableColumns.has('fechasolicitud') ? 'h.fechasolicitud' : 'CURDATE()';

    return {
      statusExpression: `CASE
        WHEN ${isTrue('anulado')} THEN 6
        WHEN ${isTrue('compra')} THEN 5
        WHEN ${isTrue('comprar')} THEN 4
        WHEN ${isTrue('pedido')} THEN 3
        WHEN ${isTrue('despachar')} THEN 2
        WHEN ${isTrue('autorizado')} THEN 1
        ELSE 0
      END`,
      statusStartedAtExpression: `CASE
        WHEN ${isTrue('anulado')} THEN COALESCE(${dateValue('fechaanulado')}, ${fallbackDate})
        WHEN ${isTrue('compra')} THEN COALESCE(${dateValue('fec_emis_comp')}, ${fallbackDate})
        WHEN ${isTrue('comprar')} THEN COALESCE(${dateValue('fechacomprar')}, ${fallbackDate})
        WHEN ${isTrue('pedido')} THEN COALESCE(${dateValue('fec_emis_ped')}, ${fallbackDate})
        WHEN ${isTrue('despachar')} THEN COALESCE(${dateValue('fechadespachar')}, ${fallbackDate})
        WHEN ${isTrue('autorizado')} THEN COALESCE(${dateValue('fechaautorizado')}, ${fallbackDate})
        ELSE ${fallbackDate}
      END`,
    };
  }

  private buildHeaderColumnSql(availableColumns: Set<string>, column: string, alias = column) {
    return availableColumns.has(column.toLowerCase())
      ? `h.${column} AS ${alias}`
      : `NULL AS ${alias}`;
  }

  private buildHeaderDateColumnSql(availableColumns: Set<string>, column: string, alias = column) {
    return availableColumns.has(column.toLowerCase())
      ? `DATE_FORMAT(h.${column}, '%Y-%m-%d %H:%i:%s') AS ${alias}`
      : `NULL AS ${alias}`;
  }

  private buildHeaderStringColumnSql(availableColumns: Set<string>, column: string, alias = column) {
    return availableColumns.has(column.toLowerCase())
      ? `RTRIM(h.${column}) AS ${alias}`
      : `NULL AS ${alias}`;
  }

  async getMaterials(): Promise<VeneluxMaterial[]> {
    return this.sql.$queryRaw<VeneluxMaterial[]>`
      SELECT RTRIM(a.co_art) AS codigo,
             RTRIM(a.art_des) AS material,
             RTRIM(b.co_uni) AS coduni,
             a.modelo AS nroparte,
             a.ref AS codbarra,
             RTRIM(c.des_uni) AS unidad,
             CAST(CONCAT(RTRIM(d.co_lin), ' - ', RTRIM(d.lin_des)) AS VARCHAR(60)) AS linea,
             CAST(CONCAT(RTRIM(e.co_subl), ' - ', RTRIM(e.subl_des)) AS VARCHAR(60)) AS sublinea,
             CAST(CONCAT(RTRIM(f.co_cat), ' - ', RTRIM(f.cat_des)) AS VARCHAR(60)) AS categoria,
             ISNULL((
               SELECT h.monto
               FROM VENE_A.dbo.saArtPrecio h
               WHERE h.co_art = a.co_art
                 AND h.co_precio = 'PMVP'
                 AND h.co_alma = '900'
             ), 0) AS precio

      FROM VENE_A.dbo.saArticulo a
      LEFT JOIN VENE_A.dbo.saArtUnidad b ON b.co_art = a.co_art
      LEFT JOIN VENE_A.dbo.saUnidad c ON c.co_uni = b.co_uni
      LEFT JOIN VENE_A.dbo.saLineaArticulo d ON d.co_lin = a.co_lin
      LEFT JOIN VENE_A.dbo.saSubLinea e ON e.co_lin = a.co_lin AND e.co_subl = a.co_subl
      LEFT JOIN VENE_A.dbo.saCatArticulo f ON f.co_cat = a.co_cat
      WHERE a.anulado = 0
        AND a.co_cat = 'M'
        AND a.co_lin NOT IN ('SS20', 'A01', 'G11', 'G29', 'G35', 'G36', 'G61')
        AND a.art_des NOT LIKE '%ANULADO%'
        AND a.art_des NOT LIKE '%NO USAR%'
        AND a.art_des NOT LIKE '%USAR%'
      ORDER BY material;
    `;
  }
  async getMaterialsSGE(): Promise<SaArticuloMaterial[]> {
    const materials = await this.mysql.saArticulo.findMany({
      select: {
        codart: true,
        marca: true,
        noparte: true,
        imagen1: true,
        imagen2: true,  
        imagen3: true,
      },
    });

    return materials.map((item) => ({
      ...item,
      codart: String(item.codart),
    }));
  }

  async getUnits(): Promise<VeneluxUnit[]> {
    return this.sql.$queryRaw<VeneluxUnit[]>`
      SELECT DISTINCT
             RTRIM(a.co_uni) AS coduni,
             RTRIM(b.des_uni) AS desuni
      FROM VENE_A.dbo.saArtUnidad a
      LEFT JOIN VENE_A.dbo.saUnidad b ON b.co_uni = a.co_uni;
    `;
  }

  async getSolicitudesWithMaterials(): Promise<{
    data: VeneluxSolicitudWithMaterials[];
    total: number;
  }> {
    const availableColumns = await this.getCbsolicimatColumns();
    const { statusExpression, statusStartedAtExpression } = this.buildSolicitudStatusSql(availableColumns);

    const rows = await this.mysql.$queryRawUnsafe<Array<{
      solicitudnumero: string | number;
      empresa: string | null;
      codigoobra: string | null;
      descripcionobra: string | null;
      numerocontrol: string | null;
      solicitanteuser: string | null;
      solicitantecodigo: string | null;
      fechasolicitud: string | null;
      fechautilizacion: string | null;
      observacion: string | null;
      actividad: string | null;
      direccionentrega: string | null;
      registradopor: string | null;
      autorizado: string | number | boolean | null;
      fechaautorizado: string | null;
      autorizadopor: string | null;
      anulado: string | number | boolean | null;
      motivoanulado: string | null;
      fechaanulado: string | null;
      anuladopor: string | null;
      despachar: string | number | boolean | null;
      fechadespachar: string | null;
      despacharpor: string | null;
      comentadespachar: string | null;
      pedido: string | number | boolean | null;
      ped_num: string | null;
      fec_emis_ped: string | null;
      co_us_ped: string | null;
      comprar: string | number | boolean | null;
      fechacomprar: string | null;
      comprarpor: string | null;
      comentacomprar: string | null;
      compra: string | number | boolean | null;
      comp_num: string | null;
      fec_emis_comp: string | null;
      co_us_comp: string | null;
      owneruser: string | number | null;
      estatus: string | number | bigint;
      horasEnEstatus: string | number | bigint | null;
      itemnumero: string | number | null;
      codigomaterial: string | null;
      descripcionmaterial: string | null;
      marca: string | null;
      noparte: string | null;
      imagen1: string | null;
      imagen2: string | null;
      imagen3: string | null;
      coduni: string | null;
      unidadmedida: string | null;
      linea: string | null;
      sublinea: string | null;
      categoria: string | null;
      cantidadsolicitada: number | null;
      precioventa: number | null;
      detalle_autorizado: string | number | boolean | null;
      detalle_fechaautorizado: string | null;
      detalle_autorizadopor: string | null;
      detalle_cantidadautorizada: string | number | null;
      detalle_cantidaddespacho: string | number | null;
      detalle_cantidaddisponible: string | number | null;
      detalle_almacendespacho: string | null;
      detalle_cantidadcompra: string | number | null;
      detalle_comprar: string | number | boolean | null;
      detalle_observacion: string | null;
      materialnuevo: string | null;
    }>>(`
      SELECT
        h.solicitudnumero,
        RTRIM(h.empresa) AS empresa,
        RTRIM(h.codigoobra) AS codigoobra,
        RTRIM(h.descripcionobra) AS descripcionobra,
        RTRIM(h.numerocontrol) AS numerocontrol,
        RTRIM(h.solicitanteuser) AS solicitanteuser,
        RTRIM(h.solicitantecodigo) AS solicitantecodigo,
        DATE_FORMAT(h.fechasolicitud, '%Y-%m-%d %H:%i:%s') AS fechasolicitud,
        DATE_FORMAT(h.fechautilizacion, '%Y-%m-%d %H:%i:%s') AS fechautilizacion,
        RTRIM(h.observacion) AS observacion,
        RTRIM(h.actividad) AS actividad,
        RTRIM(h.direccionentrega) AS direccionentrega,
        RTRIM(h.registradopor) AS registradopor,
        ${this.buildHeaderColumnSql(availableColumns, 'autorizado')},
        ${this.buildHeaderDateColumnSql(availableColumns, 'fechaautorizado')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'autorizadopor')},
        ${this.buildHeaderColumnSql(availableColumns, 'anulado')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'motivoanulado')},
        ${this.buildHeaderDateColumnSql(availableColumns, 'fechaanulado')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'anuladopor')},
        ${this.buildHeaderColumnSql(availableColumns, 'despachar')},
        ${this.buildHeaderDateColumnSql(availableColumns, 'fechadespachar')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'despacharpor')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'comentadespachar')},
        ${this.buildHeaderColumnSql(availableColumns, 'pedido')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'ped_num')},
        ${this.buildHeaderDateColumnSql(availableColumns, 'fec_emis_ped')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'co_us_ped')},
        ${this.buildHeaderColumnSql(availableColumns, 'comprar')},
        ${this.buildHeaderDateColumnSql(availableColumns, 'fechacomprar')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'comprarpor')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'comentacomprar')},
        ${this.buildHeaderColumnSql(availableColumns, 'compra')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'comp_num')},
        ${this.buildHeaderDateColumnSql(availableColumns, 'fec_emis_comp')},
        ${this.buildHeaderStringColumnSql(availableColumns, 'co_us_comp')},
        h.owneruser,
        ${statusExpression} AS estatus,
        GREATEST(TIMESTAMPDIFF(HOUR, ${statusStartedAtExpression}, NOW()), 0) AS horasEnEstatus,
        dt.itemnumero,
        RTRIM(dt.codigomaterial) AS codigomaterial,
        RTRIM(dt.descripcionmaterial) AS descripcionmaterial,
        RTRIM(art.marca) AS marca,
        RTRIM(art.noparte) AS noparte,
        RTRIM(art.imagen1) AS imagen1,
        RTRIM(art.imagen2) AS imagen2,
        RTRIM(art.imagen3) AS imagen3,
        RTRIM(dt.coduni) AS coduni,
        RTRIM(dt.unidadmedida) AS unidadmedida,
        RTRIM(dt.linea) AS linea,
        RTRIM(dt.sublinea) AS sublinea,
        RTRIM(dt.categoria) AS categoria,
        dt.cantidadsolicitada,
        dt.precioventa,
        dt.autorizado AS detalle_autorizado,
        DATE_FORMAT(dt.fechaautorizado, '%Y-%m-%d %H:%i:%s') AS detalle_fechaautorizado,
        RTRIM(dt.autorizadopor) AS detalle_autorizadopor,
        dt.cantidadautorizada AS detalle_cantidadautorizada,
        dt.cantidaddespacho AS detalle_cantidaddespacho,
        dt.cantidaddisponible AS detalle_cantidaddisponible,
        RTRIM(dt.almacendespacho) AS detalle_almacendespacho,
        dt.cantidadcompra AS detalle_cantidadcompra,
        dt.comprar AS detalle_comprar,
        RTRIM(dt.observacion) AS detalle_observacion,
        RTRIM(dt.materialnuevo) AS materialnuevo
      FROM cbsolicimat h
      LEFT JOIN dtsolicimat dt ON dt.solicitudnumero = h.solicitudnumero
      LEFT JOIN saArticulo art
        ON CAST(art.codart AS CHAR(30)) COLLATE utf8mb4_unicode_ci
         = TRIM(dt.codigomaterial) COLLATE utf8mb4_unicode_ci
      ORDER BY h.solicitudnumero DESC, dt.itemnumero ASC;
    `);

    const grouped = new Map<string, VeneluxSolicitudWithMaterials>();

    for (const row of rows) {
      const solicitudnumero = String(row.solicitudnumero);
      const header = grouped.get(solicitudnumero);

      if (!header) {
        const estatus = Number(row.estatus);
        const horasEnEstatus = Number(row.horasEnEstatus ?? 0);

        grouped.set(solicitudnumero, {
          solicitudnumero,
          empresa: row.empresa ?? '',
          codigoobra: row.codigoobra ?? '',
          descripcionobra: row.descripcionobra ?? '',
          numerocontrol: row.numerocontrol ?? '',
          solicitanteuser: row.solicitanteuser ?? '',
          solicitantecodigo: row.solicitantecodigo ?? '',
          fechasolicitud: row.fechasolicitud ?? '',
          fechautilizacion: row.fechautilizacion ?? '',
          observacion: row.observacion ?? '',
          actividad: row.actividad ?? '',
          direccionentrega: row.direccionentrega ?? '',
          registradopor: row.registradopor ?? '',
          autorizado: row.autorizado,
          fechaautorizado: row.fechaautorizado,
          autorizadopor: row.autorizadopor,
          anulado: row.anulado,
          motivoanulado: row.motivoanulado,
          fechaanulado: row.fechaanulado,
          anuladopor: row.anuladopor,
          despachar: row.despachar,
          fechadespachar: row.fechadespachar,
          despacharpor: row.despacharpor,
          comentadespachar: row.comentadespachar,
          pedido: row.pedido,
          ped_num: row.ped_num,
          fec_emis_ped: row.fec_emis_ped,
          co_us_ped: row.co_us_ped,
          comprar: row.comprar,
          fechacomprar: row.fechacomprar,
          comprarpor: row.comprarpor,
          comentacomprar: row.comentacomprar,
          compra: row.compra,
          comp_num: row.comp_num,
          fec_emis_comp: row.fec_emis_comp,
          co_us_comp: row.co_us_comp,
          owneruser: String(row.owneruser ?? ''),
          estatus,
          estatusLabel: VENELUX_SOLICITUD_STATUS_LABELS[estatus] ?? `Estatus ${estatus}`,
          horasEnEstatus,
          diasEnEstatus: Number((horasEnEstatus / 24).toFixed(2)),
          materiales: [],
        });
      }

      if (row.itemnumero !== null && row.itemnumero !== undefined) {
        grouped.get(solicitudnumero)?.materiales.push({
          itemnumero: String(row.itemnumero),
          codigomaterial: row.codigomaterial ?? '',
          descripcionmaterial: row.descripcionmaterial ?? '',
          marca: row.marca,
          noparte: row.noparte,
          imagen1: row.imagen1,
          imagen2: row.imagen2,
          imagen3: row.imagen3,
          coduni: row.coduni ?? '',
          unidadmedida: row.unidadmedida ?? '',
          linea: row.linea ?? '',
          sublinea: row.sublinea ?? '',
          categoria: row.categoria ?? '',
          cantidadsolicitada: Number(row.cantidadsolicitada ?? 0),
          precioventa: Number(row.precioventa ?? 0),
          autorizado: Boolean(Number(row.detalle_autorizado ?? 0)),
          fechaautorizado: row.detalle_fechaautorizado,
          autorizadopor: row.detalle_autorizadopor,
          cantidadautorizada: Number(row.detalle_cantidadautorizada ?? 0),
          cantidaddespacho: Number(row.detalle_cantidaddespacho ?? 0),
          cantidaddisponible: Number(row.detalle_cantidaddisponible ?? 0),
          almacendespacho: row.detalle_almacendespacho,
          cantidadcompra: Number(row.detalle_cantidadcompra ?? 0),
          comprar: Boolean(Number(row.detalle_comprar ?? 0)),
          observacion: row.detalle_observacion ?? '',
          materialnuevo: row.materialnuevo ?? '',
        });
      }
    }


    const data = Array.from(grouped.values());

    return {
      data,
      total: data.length,
    };
  }

  async getSolicitudesStatusSummary(filters: {
    role?: string | number;
    userid_sge?: string | number;
  }): Promise<{
    data: VeneluxSolicitudStatusSummary[];
    total: number;
  }> {
    const role = filters.role !== undefined && filters.role !== null ? String(filters.role).trim() : undefined;
    const ownerUserId = filters.userid_sge !== undefined && filters.userid_sge !== null ? String(filters.userid_sge).trim() : undefined;
    const userBuildsFilter = role === '1' || ownerUserId === '1' ? null : ownerUserId || null;
    const availableColumns = await this.getCbsolicimatColumns();
    const { statusExpression, statusStartedAtExpression } = this.buildSolicitudStatusSql(availableColumns);
    const currentMonthFilter = availableColumns.has('fechasolicitud')
      ? `AND h.fechasolicitud >= DATE_SUB(CURDATE(), INTERVAL DAYOFMONTH(CURDATE()) - 1 DAY)
        AND h.fechasolicitud < DATE_ADD(DATE_SUB(CURDATE(), INTERVAL DAYOFMONTH(CURDATE()) - 1 DAY), INTERVAL 1 MONTH)`
      : '';

    const data = await this.mysql.$queryRawUnsafe<Array<{
      estatus: number | string | bigint;
      total: number | string | bigint;
      promedioHorasEnEstatus: number | string | null;
    }>>(`
      SELECT
        ${statusExpression} AS estatus,
        COUNT(1) AS total,
        AVG(GREATEST(TIMESTAMPDIFF(HOUR, ${statusStartedAtExpression}, NOW()), 0)) AS promedioHorasEnEstatus
      FROM cbsolicimat h
      WHERE (
        ? IS NULL
        OR EXISTS (
          SELECT 1
          FROM sge.users_builds ub
          WHERE CAST(ub.userID AS CHAR(50)) = ?
            AND TRIM(ub.codigoobra) COLLATE utf8mb4_unicode_ci = TRIM(h.codigoobra) COLLATE utf8mb4_unicode_ci
        )
      )
      ${currentMonthFilter}
      GROUP BY estatus
      ORDER BY estatus ASC;
    `, userBuildsFilter, userBuildsFilter);

    return {
      data: data.map((item) => {
        const estatus = Number(item.estatus);
        const promedioHorasEnEstatus = Number(item.promedioHorasEnEstatus ?? 0);

        return {
          estatus,
          label: VENELUX_SOLICITUD_STATUS_LABELS[estatus] ?? `Estatus ${estatus}`,
          total: Number(item.total),
          promedioHorasEnEstatus,
          promedioDiasEnEstatus: Number((promedioHorasEnEstatus / 24).toFixed(2)),
        };
      }),
      total: data.reduce((sum, item) => sum + Number(item.total), 0),
    };
  }

  async createHeader(payload: CreateVeneluxHeader, userid_sge: string): Promise<string> {
    return this.mysql.$transaction(async (tx) => {
      const solicitudnumero = await this.getNextSolicitudNumero(tx);

      await tx.$executeRaw`
        INSERT INTO cbsolicimat (
          solicitudnumero,
          empresa,
          codigoobra,
          descripcionobra,
          numerocontrol,
          solicitanteuser,
          solicitantecodigo,
          fechasolicitud,
          fechautilizacion,
          observacion,
          actividad,
          direccionentrega,
          registradopor,
          owneruser
        )
        VALUES (
          ${solicitudnumero},
          ${payload.empresa},
          ${payload.codigoobra},
          ${payload.descripcionobra},
          ${payload.numerocontrol},
          ${payload.solicitanteuser},
          ${payload.solicitantecodigo},
          ${payload.fechasolicitud},
          ${payload.fechautilizacion},
          ${payload.observacion},
          ${payload.actividad},
          ${payload.direccionentrega},
          ${payload.registradopor},
          ${userid_sge}
        );
      `;

      return solicitudnumero;
    });
  }

  async createDetail(payload: CreateVeneluxDetail): Promise<void> {
    await this.mysql.$executeRaw`
      INSERT INTO dtsolicimat (
        solicitudnumero,
        itemnumero,
        codigomaterial,
        descripcionmaterial,
        coduni,
        unidadmedida,
        linea,
        sublinea,
        categoria,
        cantidadsolicitada,
        precioventa,
        observacion,
        materialnuevo
      )
      VALUES (
        ${payload.solicitudnumero},
        ${payload.itemnumero},
        ${payload.codigomaterial},
        ${payload.descripcionmaterial},
        ${payload.coduni},
        ${payload.unidadmedida},
        ${payload.linea},
        ${payload.sublinea},
        ${payload.categoria},
        ${payload.cantidadsolicitada},
        ${payload.precioventa},
        ${payload.observacion},
        ${payload.materialnuevo}
      );
    `;
  }

  async createMovement(payload: CreateVeneluxMovement): Promise<void> {
    await this.mysql.$executeRaw`
      INSERT INTO mvsolicimat (
        solicitudnumero,
        itemnumero,
        codart,
        coduni,
        codalma,
        desalma,
        stock,
        prioridad,
        almacen,
        cantidad,
        traslado,
        tras_num,
        costo,
        fechacosto
      )
      VALUES (
        ${payload.solicitudnumero},
        ${payload.itemnumero},
        ${payload.codart},
        ${payload.coduni},
        ${payload.codalma},
        ${payload.desalma},
        ${payload.stock},
        ${payload.prioridad},
        ${payload.almacen},
        ${payload.cantidad},
        ${payload.traslado},
        ${payload.tras_num || null},
        ${payload.costo},
        ${payload.fechacosto || null}
      );
    `;
  }

  async createSolicitudWithDetails(payload: CreateVeneluxSolicitud, userid_sge: string): Promise<string> {
    return this.mysql.$transaction(async (tx) => {
      const solicitudnumero = await this.getNextSolicitudNumero(tx);

      await tx.$executeRaw`
        INSERT INTO cbsolicimat (
          solicitudnumero,
          empresa,
          codigoobra,
          descripcionobra,
          numerocontrol,
          solicitanteuser,
          solicitantecodigo,
          fechasolicitud,
          fechautilizacion,
          observacion,
          actividad,
          direccionentrega,
          registradopor,
          owneruser
        )
        VALUES (
          ${solicitudnumero},
          ${payload.header.empresa},
          ${payload.header.codigoobra},
          ${payload.header.descripcionobra},
          ${payload.header.numerocontrol},
          ${payload.header.solicitanteuser},
          ${payload.header.solicitantecodigo},
          ${payload.header.fechasolicitud},
          ${payload.header.fechautilizacion},
          ${payload.header.observacion},
          ${payload.header.actividad},
          ${payload.header.direccionentrega},
          ${payload.header.registradopor},
          ${userid_sge}
        );
      `;

      for (const detail of payload.details) {
        await tx.$executeRaw`
          INSERT INTO dtsolicimat (
            solicitudnumero,
            itemnumero,
            codigomaterial, 
            descripcionmaterial,
            coduni,
            unidadmedida,
            linea,
            sublinea,
            categoria,
            cantidadsolicitada,
            precioventa,
            observacion,
            materialnuevo
          )
          VALUES (
            ${solicitudnumero},
            ${detail.itemnumero},
            ${detail.codigomaterial},
            ${detail.descripcionmaterial},
            ${detail.coduni},
            ${detail.unidadmedida},
            ${detail.linea},
            ${detail.sublinea},
            ${detail.categoria},
            ${detail.cantidadsolicitada},
            ${detail.precioventa},
            ${detail.observacion},
            ${detail.materialnuevo}
          );
        `;
      }

      for (const movement of payload.movements ?? []) {
        await tx.$executeRaw`
          INSERT INTO mvsolicimat (
            solicitudnumero,
            itemnumero,
            codart,
            coduni,
            codalma,
            desalma,
            stock,
            prioridad,
            almacen,
            cantidad,
            traslado,
            tras_num,
            costo,
            fechacosto
          )
          VALUES (
            ${solicitudnumero},
            ${movement.itemnumero},
            ${movement.codart},
            ${movement.coduni},
            ${movement.codalma},
            ${movement.desalma},
            ${movement.stock},
            ${movement.prioridad},
            ${movement.almacen},
            ${movement.cantidad},
            ${movement.traslado},
            ${movement.tras_num || null},
            ${movement.costo},
            ${movement.fechacosto || null}
          );
        `;
      }

      return solicitudnumero;
    });
  }
  async getObras(userid_sge: string): Promise<{ codigoobra: string; descripcionobra: string }[]> {

    const ownerUserId = userid_sge ? parseInt(userid_sge, 10) : 1;

    if (ownerUserId === 1) {
      return this.mysql.$queryRaw<{ codigoobra: string; descripcionobra: string }[]>`
        SELECT RTRIM(codigoobra) AS codigoobra,
               RTRIM(descripcionobra) AS descripcionobra
        FROM sge.users_builds
        ORDER BY descripcionobra;
      `;
    }

    return this.mysql.$queryRaw<{ codigoobra: string; descripcionobra: string }[]>`
      SELECT RTRIM(codigoobra) AS codigoobra,
             RTRIM(descripcionobra) AS descripcionobra
      FROM sge.users_builds
      WHERE userID = ${ownerUserId}
      ORDER BY descripcionobra;
    `;
  }
}
