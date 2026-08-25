import { CreateVeneluxDetail } from '../types/create-venelux-detail.type';
import { CreateVeneluxHeader } from '../types/create-venelux-header.type';
import { CreateVeneluxMovement } from '../types/create-venelux-movement.type';
import { CreateVeneluxSolicitud } from '../types/create-venelux-solicitud.type';
import { SaArticuloMaterial } from '../types/saarticulo-material.type';
import { VeneluxMaterial } from '../types/venelux-material.type';
import { VeneluxSolicitudStatusSummary, VeneluxSolicitudWithMaterials } from '../types/venelux-solicitud-with-materials.type';
import { VeneluxUnit } from '../types/venelux-unit.type';

export const VENELUX_REPOSITORY = Symbol('VENELUX_REPOSITORY');

export interface VeneluxRepository {
  getMaterials(): Promise<VeneluxMaterial[]>;
  getMaterialsSGE(): Promise<SaArticuloMaterial[]>;
  getUnits(): Promise<VeneluxUnit[]>;
  getSolicitudesWithMaterials(): Promise<{
    data: VeneluxSolicitudWithMaterials[];
    total: number;
  }>;
  getSolicitudesStatusSummary(filters: {
    role?: string | number;
    userid_sge?: string | number;
  }): Promise<{
    data: VeneluxSolicitudStatusSummary[];
    total: number;
  }>;
  getObras(userid_sge: string): Promise<{ codigoobra: string; descripcionobra: string }[]>;
  createHeader(payload: CreateVeneluxHeader, userid_sge: string): Promise<string>;
  createDetail(payload: CreateVeneluxDetail): Promise<void>;
  createMovement(payload: CreateVeneluxMovement): Promise<void>;
  createSolicitudWithDetails(payload: CreateVeneluxSolicitud, userid_sge: string): Promise<string>;
}
