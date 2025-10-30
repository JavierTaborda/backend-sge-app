import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ReturnsController } from './returns.controller';
import { ReturnsService } from './returns.service';

@Module({ imports: [DatabaseModule],
    controllers: [ReturnsController],
     providers: [ReturnsService]

})
export class ReturnsModule {}
