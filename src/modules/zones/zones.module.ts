import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { ZonesController } from './zones.controller';
import { ZonesService } from './zones.service';

@Module({
  imports: [DatabaseModule, AuthModule],
  providers: [ZonesService],
  controllers: [ZonesController],
})
export class ZonesModule {}
