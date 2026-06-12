import { CreateVeneluxDetail } from '../types/create-venelux-detail.type';
import { CreateVeneluxHeader } from '../types/create-venelux-header.type';
import { CreateVeneluxSolicitud } from '../types/create-venelux-solicitud.type';
import { VeneluxMaterial } from '../types/venelux-material.type';
import { VeneluxUnit } from '../types/venelux-unit.type';

export const VENELUX_REPOSITORY = Symbol('VENELUX_REPOSITORY');

export interface VeneluxRepository {
  getMaterials(): Promise<VeneluxMaterial[]>;
  getUnits(): Promise<VeneluxUnit[]>;
  createHeader(payload: CreateVeneluxHeader): Promise<void>;
  createDetail(payload: CreateVeneluxDetail): Promise<void>;
  createSolicitudWithDetails(payload: CreateVeneluxSolicitud): Promise<void>;
}
