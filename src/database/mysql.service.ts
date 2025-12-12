import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient as MySQLClient } from '../prisma-clients/mysql/client';

@Injectable()
export class MySQLPrismaService
  extends MySQLClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT, 10) : 3306,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      connectionLimit: 15,
      compress: true,
      
    });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ MariaDB/MySQL connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('❌ MariaDB/MySQL disconnected');
  }
}
