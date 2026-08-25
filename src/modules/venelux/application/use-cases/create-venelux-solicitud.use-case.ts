import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  VENELUX_REPOSITORY,
  type VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';
import { CreateSolicitudDto } from '../../dtos/create-solicitud.dto';

@Injectable()
export class CreateVeneluxSolicitudUseCase {
  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute(payload: CreateSolicitudDto, userid_sge: string) {
    const movements = payload.movements ?? [];

    const detailKeys = new Set(
      payload.details.map((item) => item.itemnumero),
    );

    const hasMovementWithoutDetail = movements.some(
      (item) => !detailKeys.has(item.itemnumero),
    );

    if (hasMovementWithoutDetail) {
      throw new BadRequestException(
        'Cada movimiento debe estar asociado a un item existente en details.',
      );
    }

    const solicitudnumero = await this.repository.createSolicitudWithDetails(
      {
        header: payload.header,
        details: payload.details,
        movements,
      },
      userid_sge,
    );

    return {
      success: true,
      solicitudnumero,
      totalDetalles: payload.details.length,
    };
  }
}
