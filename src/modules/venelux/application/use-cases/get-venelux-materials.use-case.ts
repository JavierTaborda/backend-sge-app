import { Inject, Injectable } from '@nestjs/common';
import {
  VENELUX_REPOSITORY,
  VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';

@Injectable()
export class GetVeneluxMaterialsUseCase {
  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  execute() {
    return this.repository.getMaterials();
  }
}
