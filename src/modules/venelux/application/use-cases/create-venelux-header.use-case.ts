import { Inject, Injectable } from '@nestjs/common';
import {
  VENELUX_REPOSITORY,
  type VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';
import { CreateHeaderDto } from '../../dtos/create-header.dto';

@Injectable()
export class CreateVeneluxHeaderUseCase {
  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute(payload: CreateHeaderDto) {
    await this.repository.createHeader(payload);
    return {
      success: true,
      solicitudnumero: payload.solicitudnumero,
    };
  }
}
