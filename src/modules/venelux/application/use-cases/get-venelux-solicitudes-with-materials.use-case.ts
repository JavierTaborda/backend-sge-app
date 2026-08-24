import { Inject, Injectable, Logger } from '@nestjs/common';
import {
    VENELUX_REPOSITORY,
    type VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';

@Injectable()
export class GetVeneluxSolicitudesWithMaterialsUseCase {
  private readonly logger = new Logger(GetVeneluxSolicitudesWithMaterialsUseCase.name);

  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute() {
    try {
      return this.repository.getSolicitudesWithMaterials();
    } catch (error) {
      this.logger.error(
        'Failed to load Venelux solicitudes with materials',
        error instanceof Error ? error.stack : String(error),
      );
      throw error;
    }
  }
}
