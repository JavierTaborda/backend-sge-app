import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateVeneluxDetailUseCase } from './application/use-cases/create-venelux-detail.use-case';
import { CreateVeneluxHeaderUseCase } from './application/use-cases/create-venelux-header.use-case';
import { CreateVeneluxSolicitudUseCase } from './application/use-cases/create-venelux-solicitud.use-case';
import { GetVeneluxMaterialsUseCase } from './application/use-cases/get-venelux-materials.use-case';
import { GetVeneluxUnitsUseCase } from './application/use-cases/get-venelux-units.use-case';
import { VENELUX_REPOSITORY } from './domain/interfaces/venelux.repository';
import { VeneluxPrismaRepository } from './infrastructure/venelux-prisma.repository';
import { VeneluxController } from './venelux.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VeneluxController],
  providers: [
    {
      provide: VENELUX_REPOSITORY,
      useClass: VeneluxPrismaRepository,
    },
    GetVeneluxMaterialsUseCase,
    GetVeneluxUnitsUseCase,
    CreateVeneluxHeaderUseCase,
    CreateVeneluxDetailUseCase,
    CreateVeneluxSolicitudUseCase,
  ],
})
export class VeneluxModule {}
