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
    const headerNumber = payload.header.solicitudnumero;
    const allMatchHeader = payload.details.every(
      (item) => item.solicitudnumero === headerNumber,
    );

    if (!allMatchHeader) {
      throw new BadRequestException(
        'Todos los detalles deben tener el mismo solicitudnumero de la cabecera.',
      );
    }

    const movements = payload.movements ?? [];
    const allMovementsMatchHeader = movements.every(
      (item) => item.solicitudnumero === headerNumber,
    );

    if (!allMovementsMatchHeader) {
      throw new BadRequestException(
        'Todos los movimientos deben tener el mismo solicitudnumero de la cabecera.',
      );
    }

    const detailKeys = new Set(
      payload.details.map((item) => `${item.solicitudnumero}::${item.itemnumero}`),
    );

    const hasMovementWithoutDetail = movements.some(
      (item) => !detailKeys.has(`${item.solicitudnumero}::${item.itemnumero}`),
    );

    if (hasMovementWithoutDetail) {
      throw new BadRequestException(
        'Cada movimiento debe estar asociado a un item existente en details.',
      );
    }

    await this.repository.createSolicitudWithDetails(
      {
        header: payload.header,
        details: payload.details,
        movements,
      },
      userid_sge,
    );

    return {
      success: true,
      solicitudnumero: headerNumber,
      totalDetalles: payload.details.length,
    };
  }
}
