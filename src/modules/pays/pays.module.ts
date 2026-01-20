import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PaysController } from './pays.controller';
import { PaysService } from './pays.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PaysController],
  providers: [PaysService],
})
export class PaysModule {}
