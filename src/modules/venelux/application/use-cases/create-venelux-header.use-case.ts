import { Inject, Injectable } from '@nestjs/common';
import { CreateHeaderDto } from '../../dtos/create-header.dto';
import {
  VENELUX_REPOSITORY,
  VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';

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
