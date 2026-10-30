import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { DispatchController } from './dispatch.controller';
import { DispatchService } from './dispatch.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DispatchController],
  providers: [DispatchService],
})
export class DispatchModule {}
