import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  VENELUX_REPOSITORY,
  type VeneluxRepository,
} from '../../domain/interfaces/venelux.repository';
import { SaArticuloMaterial } from '../../domain/types/saarticulo-material.type';
import { VeneluxMaterial } from '../../domain/types/venelux-material.type';

@Injectable()
export class GetVeneluxMaterialsUseCase {
  private readonly logger = new Logger(GetVeneluxMaterialsUseCase.name);

  constructor(
    @Inject(VENELUX_REPOSITORY)
    private readonly repository: VeneluxRepository,
  ) {}

  async execute(page = 1, limit = 50) {
    try {
      const result = await this.buildMaterialsResult();
      const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
      const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : 50;
      const total = result.length;
      const start = (safePage - 1) * safeLimit;
      const data = result.slice(start, start + safeLimit);

      return {
        data,
        total,
        page: safePage,
        lastPage: Math.ceil(total / safeLimit),
      };
    } catch (error) {
      this.logger.error('Failed to load Venelux materials', error instanceof Error ? error.stack : String(error));
      throw error;
    }
  }

  async executeAll() {
    try {
      const result = await this.buildMaterialsResult();

      return {
        data: result,
        total: result.length,
      };
    } catch (error) {
      this.logger.error('Failed to load Venelux materials without pagination', error instanceof Error ? error.stack : String(error));
      throw error;
    }
  }

  private async buildMaterialsResult() {
    const [veneluxMaterials, sgeMaterials] = await Promise.all([
      this.repository.getMaterials(),
      this.repository.getMaterialsSGE(),
    ]);
    const materialsMap = new Map<string, SaArticuloMaterial>();

    sgeMaterials.forEach((sge) => {
      const key = String(sge.codart).trim();
      if (key) {
        materialsMap.set(key, sge);
      }
    });

    return veneluxMaterials.map((venelux) => {
      const veneluxCode =
        (venelux as VeneluxMaterial & { codart?: string | number | null }).codart ??
        venelux.codigo;
      const key = String(veneluxCode ?? '').trim();
      const sge = key ? materialsMap.get(key) : undefined;

      return {
        ...venelux,
        marca: sge?.marca ?? null,
        noparte: sge?.noparte ?? null,
        imagen1: sge?.imagen1 ?? null,
        imagen2: sge?.imagen2 ?? null,
        imagen3: sge?.imagen3 ?? null,
      };
    });
  }
  async getObras(userid_sge: string) {

    const obras = await this.repository.getObras( userid_sge);
    return obras;
  }
}
