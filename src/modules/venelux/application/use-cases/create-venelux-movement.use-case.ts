import { Inject, Injectable } from '@nestjs/common';
import type { VeneluxRepository } from '../../domain/interfaces/venelux.repository';
import { VENELUX_REPOSITORY } from '../../domain/interfaces/venelux.repository';
import { CreateMovementDto } from '../../dtos/create-movement.dto';

@Injectable()
export class CreateVeneluxMovementUseCase {
  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute(payload: CreateMovementDto) {
    await this.repository.createMovement(payload);
    return {
      success: true,
      solicitudnumero: payload.solicitudnumero,
      itemnumero: payload.itemnumero,
      codalma: payload.codalma,
    };
  }
}