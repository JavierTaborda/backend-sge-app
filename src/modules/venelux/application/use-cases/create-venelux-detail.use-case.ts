import { Inject, Injectable } from '@nestjs/common';
import type { VeneluxRepository } from '../../domain/interfaces/venelux.repository';
import { VENELUX_REPOSITORY } from '../../domain/interfaces/venelux.repository';
import { CreateDetailDto } from '../../dtos/create-detail.dto';

@Injectable()
export class CreateVeneluxDetailUseCase {
  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute(payload: CreateDetailDto) {
    await this.repository.createDetail(payload);
    return {
      success: true,
      solicitudnumero: payload.solicitudnumero,
      itemnumero: payload.itemnumero,
    };
  }
}
