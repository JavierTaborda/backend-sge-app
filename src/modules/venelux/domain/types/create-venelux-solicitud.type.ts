import { CreateVeneluxDetail } from './create-venelux-detail.type';
import { CreateVeneluxHeader } from './create-venelux-header.type';

export interface CreateVeneluxSolicitud {
  header: CreateVeneluxHeader;
  details: CreateVeneluxDetail[];
}
