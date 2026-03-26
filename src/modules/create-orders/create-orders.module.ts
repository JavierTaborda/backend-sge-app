import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EmailModule } from 'src/email/email.module';
import GoalsService from '../goals/goals.service';
import { CreateOrdersController } from './create-orders.controller';
import { CreateOrdersService } from './create-orders.service';

@Module({

    imports:[DatabaseModule, EmailModule],
    providers:[CreateOrdersService, GoalsService],
    controllers:[CreateOrdersController]
})
export class CreateOrdersModule {}
