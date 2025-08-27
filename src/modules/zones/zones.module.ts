import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [ZonesService]
})
export class ZonesModule {}
