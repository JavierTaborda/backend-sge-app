import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CustomersModule } from './modules/customers/customers.module';
import { IsOnlineModule } from './modules/isonline/isonline.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { ZonesModule } from './modules/zones/zones.module';
import { GoalsModule } from './modules/goals/goals.module';



@Module({
  imports: [

    ServeStaticModule.forRoot({

      rootPath: process.env.IMAGES_ROUTE, // route in project
      serveRoot: '/api/images',        // public route
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),

    VendorsModule, OrdersModule, ZonesModule, CustomersModule, ProductsModule, IsOnlineModule, WarehousesModule, GoalsModule],


})
export class AppModule { }
