import { Inject, Injectable } from '@nestjs/common';
import {
  VENELUX_REPOSITORY,
  type VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';
import { SaArticuloMaterial } from '../../domain/types/saarticulo-material.type';

@Injectable()
export class GetVeneluxMaterialsUseCase {
  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  execute() {
    const materials = this.repository.getMaterials();
    const materialsSGE = this.repository.getMaterialsSGE();
    
    return Promise.all([materials, materialsSGE]).then(([veneluxMaterials, sgeMaterials]) => {
      const materialsMap = new Map<number, SaArticuloMaterial>();

      sgeMaterials.forEach((sge) => {
        materialsMap.set(sge.codart, sge);
      });

      return veneluxMaterials.map((venelux) => {
        const sge = venelux.codart != null ? materialsMap.get(venelux.codart) : undefined;
        return {
          ...venelux,
          marca: sge?.marca || null,
          noparte: sge?.noparte || null,
          imagen1: sge?.imagen1 || null,
          imagen2: sge?.imagen2 || null,
          imagen3: sge?.imagen3 || null,
        };
      });
    });
    
  }
}
