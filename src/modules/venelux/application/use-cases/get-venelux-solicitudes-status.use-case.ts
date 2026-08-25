import { Inject, Injectable, Logger } from '@nestjs/common';
import {
    VENELUX_REPOSITORY,
    type VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';

@Injectable()
export class GetVeneluxSolicitudesStatusUseCase {
  private readonly logger = new Logger(GetVeneluxSolicitudesStatusUseCase.name);

  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute(role?: string | number, userid_sge?: string | number) {
    try {
      return this.repository.getSolicitudesStatusSummary({ role, userid_sge });
    } catch (error) {
      this.logger.error(
        'Failed to load Venelux solicitudes status summary',
        error instanceof Error ? error.stack : String(error),
      );
      throw error;
    }
  }
}
