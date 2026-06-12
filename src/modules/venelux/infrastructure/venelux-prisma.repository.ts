import { Injectable } from '@nestjs/common';
import { SQLServer2PrismaService } from 'src/database/sqlserver2.service';
import { VeneluxRepository } from '../domain/interfaces/venelux.repository';
import { CreateVeneluxDetail } from '../domain/types/create-venelux-detail.type';
import { CreateVeneluxHeader } from '../domain/types/create-venelux-header.type';
import { CreateVeneluxSolicitud } from '../domain/types/create-venelux-solicitud.type';
import { VeneluxMaterial } from '../domain/types/venelux-material.type';
import { VeneluxUnit } from '../domain/types/venelux-unit.type';

@Injectable()
export class VeneluxPrismaRepository implements VeneluxRepository {
  constructor(private readonly sql: SQLServer2PrismaService) {}

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

  async getUnits(): Promise<VeneluxUnit[]> {
    return this.sql.$queryRaw<VeneluxUnit[]>`
      SELECT DISTINCT
             RTRIM(a.co_uni) AS coduni,
             RTRIM(b.des_uni) AS desuni
      FROM VENE_A.dbo.saArtUnidad a
      LEFT JOIN VENE_A.dbo.saUnidad b ON b.co_uni = a.co_uni;
    `;
  }

  async createHeader(payload: CreateVeneluxHeader): Promise<void> {
    await this.sql.$executeRaw`
      INSERT INTO VENE_A.dbo.cbsolicimat (
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
        ${payload.owneruser}
      );
    `;
  }

  async createDetail(payload: CreateVeneluxDetail): Promise<void> {
    await this.sql.$executeRaw`
      INSERT INTO VENE_A.dbo.dtsolicimat (
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

  async createSolicitudWithDetails(payload: CreateVeneluxSolicitud): Promise<void> {
    await this.sql.$transaction(async (tx) => {
      await tx.$executeRaw`
        INSERT INTO VENE_A.dbo.cbsolicimat (
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
          ${payload.header.owneruser}
        );
      `;

      for (const detail of payload.details) {
        await tx.$executeRaw`
          INSERT INTO VENE_A.dbo.dtsolicimat (
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
    });
  }
}
