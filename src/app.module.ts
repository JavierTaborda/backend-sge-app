import { Module } from '@nestjs/common';
import { VendorsModule } from './modules/vendors/vendors.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ZonesModule } from './modules/zones/zones.module';


@Module({
  imports: [VendorsModule, OrdersModule, ZonesModule],


})
export class AppModule {}
