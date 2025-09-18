import { Module } from '@nestjs/common';
import { CustomersModule } from './modules/customers/customers.module';
import { IsOnlineModule } from './modules/isonline/isonline.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { ZonesModule } from './modules/zones/zones.module';


@Module({
  imports: [VendorsModule, OrdersModule, ZonesModule, CustomersModule, ProductsModule, IsOnlineModule],


})
export class AppModule {}
