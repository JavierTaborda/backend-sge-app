import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CreateOrdersModule } from './modules/create-orders/create-orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { GoalsModule } from './modules/goals/goals.module';
import { IsOnlineModule } from './modules/isonline/isonline.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { ReturnsModule } from './modules/returns/returns.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { ZonesModule } from './modules/zones/zones.module';



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

    VendorsModule, OrdersModule, ZonesModule, CustomersModule, ProductsModule, IsOnlineModule, WarehousesModule, GoalsModule, CreateOrdersModule, ReturnsModule],


})
export class AppModule { }
