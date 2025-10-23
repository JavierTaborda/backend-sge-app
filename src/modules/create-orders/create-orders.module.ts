import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateOrdersController } from './create-orders.controller';
import { CreateOrdersService } from './create-orders.service';

@Module({

    imports:[DatabaseModule],
    providers:[CreateOrdersService],
    controllers:[CreateOrdersController]
})
export class CreateOrdersModule {}
