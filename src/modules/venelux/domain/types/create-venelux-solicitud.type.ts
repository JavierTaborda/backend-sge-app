import { CreateVeneluxDetail } from './create-venelux-detail.type';
import { CreateVeneluxHeader } from './create-venelux-header.type';
import { CreateVeneluxMovement } from './create-venelux-movement.type';

export interface CreateVeneluxSolicitud {
  header: CreateVeneluxHeader;
  details: CreateVeneluxDetail[];
  movements?: CreateVeneluxMovement[];
}
