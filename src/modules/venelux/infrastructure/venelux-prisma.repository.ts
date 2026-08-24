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
import { VeneluxSolicitudWithMaterials } from '../domain/types/venelux-solicitud-with-materials.type';
import { VeneluxUnit } from '../domain/types/venelux-unit.type';

@Injectable()
export class VeneluxPrismaRepository implements VeneluxRepository {
  constructor(private readonly sql: SQLServer2PrismaService, private readonly mysql: MySQLPrismaService,) { }

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
    const rows = await this.mysql.$queryRaw<Array<{
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
      owneruser: string | number | null;
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
      detalle_observacion: string | null;
      materialnuevo: string | null;
    }>>`
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
        h.owneruser,
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
        RTRIM(dt.observacion) AS detalle_observacion,
        RTRIM(dt.materialnuevo) AS materialnuevo
      FROM cbsolicimat h
      LEFT JOIN dtsolicimat dt ON dt.solicitudnumero = h.solicitudnumero
      LEFT JOIN saArticulo art
        ON CAST(art.codart AS CHAR(30)) COLLATE utf8mb4_unicode_ci
         = TRIM(dt.codigomaterial) COLLATE utf8mb4_unicode_ci
      ORDER BY h.solicitudnumero DESC, dt.itemnumero ASC;
    `;

    const grouped = new Map<string, VeneluxSolicitudWithMaterials>();

    for (const row of rows) {
      const solicitudnumero = String(row.solicitudnumero);
      const header = grouped.get(solicitudnumero);

      if (!header) {
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
          owneruser: String(row.owneruser ?? ''),
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

  async createHeader(payload: CreateVeneluxHeader, userid_sge: string): Promise<void> {
    await this.mysql.$executeRaw`
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
        ${payload.solicitudnumero},
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

  async createSolicitudWithDetails(payload: CreateVeneluxSolicitud, userid_sge: string): Promise<void> {
    await this.mysql.$transaction(async (tx) => {
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
          ${payload.header.solicitudnumero},
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
            ${detail.solicitudnumero},
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
            ${movement.solicitudnumero},
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
