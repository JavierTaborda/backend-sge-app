import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { DatabaseModule } from 'src/database/database.module';
import { ZonesController } from './zones.controller';

@Module({
  imports:[DatabaseModule],
  providers: [ZonesService],
  controllers:[ZonesController]
})
export class ZonesModule {}
