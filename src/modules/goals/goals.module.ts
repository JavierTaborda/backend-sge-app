import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { GoalsController } from './goals.controller';
import GoalsService from './goals.service';

@Module({

  imports: [DatabaseModule],
  providers: [GoalsService],
  controllers: [GoalsController]
})
export class GoalsModule { }
