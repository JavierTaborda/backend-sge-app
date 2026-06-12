import { Inject, Injectable } from '@nestjs/common';
import {
  VENELUX_REPOSITORY,
  type VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';

@Injectable()
export class GetVeneluxUnitsUseCase {
  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  execute() {
    return this.repository.getUnits();
  }
}
