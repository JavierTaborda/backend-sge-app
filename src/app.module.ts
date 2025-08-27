import { Module } from '@nestjs/common';
import { VendorsModule } from './modules/vendors/vendors.module';
import { OrdersModule } from './modules/orders/orders.module';


@Module({
  imports: [VendorsModule, OrdersModule],

})
export class AppModule {}
