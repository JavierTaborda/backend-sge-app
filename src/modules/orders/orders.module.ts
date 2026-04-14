import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EmailModule } from 'src/email/email.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';


@Module({
  imports:[DatabaseModule, EmailModule],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
