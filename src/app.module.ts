import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CreateOrdersModule } from './modules/create-orders/create-orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { GoalsModule } from './modules/goals/goals.module';
import { IsOnlineModule } from './modules/isonline/isonline.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaysModule } from './modules/pays/pays.module';
import { ProductsModule } from './modules/products/products.module';
import { ReturnsModule } from './modules/returns/returns.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { ZonesModule } from './modules/zones/zones.module';

import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 60,
        },
      ],
    }),
    AuthModule,
    ServeStaticModule.forRoot({

      rootPath: process.env.IMAGES_ROUTE, // route in project
      serveRoot: '/api/images',        // public route
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
    EmailModule,
    VendorsModule, OrdersModule, ZonesModule, CustomersModule, ProductsModule, IsOnlineModule, WarehousesModule, GoalsModule, CreateOrdersModule, ReturnsModule, PaysModule],
    providers: [
      { provide: APP_GUARD, useClass: ThrottlerGuard },
      //{ provide: APP_GUARD, useClass: JwtAuthGuard },
    ],


})
export class AppModule { }
