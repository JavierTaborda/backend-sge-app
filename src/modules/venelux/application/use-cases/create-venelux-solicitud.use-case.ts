import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
    VENELUX_REPOSITORY,
    VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';
import { CreateSolicitudDto } from '../../dtos/create-solicitud.dto';

@Injectable()
export class CreateVeneluxSolicitudUseCase {
  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute(payload: CreateSolicitudDto) {
    const headerNumber = payload.header.solicitudnumero;
    const allMatchHeader = payload.details.every(
      (item) => item.solicitudnumero === headerNumber,
    );

    if (!allMatchHeader) {
      throw new BadRequestException(
        'Todos los detalles deben tener el mismo solicitudnumero de la cabecera.',
      );
    }

    await this.repository.createSolicitudWithDetails({
      header: payload.header,
      details: payload.details,
    });

    return {
      success: true,
      solicitudnumero: headerNumber,
      totalDetalles: payload.details.length,
    };
  }
}
