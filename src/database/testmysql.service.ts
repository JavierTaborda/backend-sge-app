import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient as MySQLClient } from '../prisma-clients/testsql/client';

@Injectable()
export class TestMySQLPrismaService
  extends MySQLClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.TEST_MYSQL_HOST,
      port: process.env.TEST_MYSQL_PORT ? parseInt(process.env.TEST_MYSQL_PORT, 10) : 3306,
      user: process.env.TEST_MYSQL_USER,
      password: process.env.TEST_MYSQL_PASSWORD,
      database: process.env.TEST_MYSQL_DATABASE,
      connectionLimit: 15,
      compress: true,
      
    });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Test Database MariaDB/MySQL connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('❌ Test Database MariaDB/MySQL disconnected');
  }
}
