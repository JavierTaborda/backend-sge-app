import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  VENELUX_REPOSITORY,
  type VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';
import { SaArticuloMaterial } from '../../domain/types/saarticulo-material.type';

@Injectable()
export class GetVeneluxMaterialsUseCase {
  private readonly logger = new Logger(GetVeneluxMaterialsUseCase.name);

  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute() {
    try {
      const [veneluxMaterials, sgeMaterials] = await Promise.all([
        this.repository.getMaterials(),
        this.repository.getMaterialsSGE(),
      ]);
    

      const materialsMap = new Map<number, SaArticuloMaterial>();
   

      sgeMaterials.forEach((sge) => {
        const key = Number(sge.codart);
        if (!Number.isNaN(key)) {
          materialsMap.set(key, sge);
        }
      });
     
      //console.log('SGE materials:', sgeMaterials);

      const result = veneluxMaterials.map((venelux) => {
        const key = Number(venelux.codart);
        const sge = !Number.isNaN(key) ? materialsMap.get(key) : undefined;

        return {
          ...venelux,
          marca: sge?.marca ?? null,
          noparte: sge?.noparte ?? null,
          imagen1: sge?.imagen1 ?? null,
          imagen2: sge?.imagen2 ?? null,
          imagen3: sge?.imagen3 ?? null,
        };
      });
      return result;
    } catch (error) {
      this.logger.error('Failed to load Venelux materials', error instanceof Error ? error.stack : String(error));
      throw error; 
    }
  }
}
