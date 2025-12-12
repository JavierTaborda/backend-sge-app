import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaMssql } from '@prisma/adapter-mssql';
import 'dotenv/config';
import { PrismaClient as SQLServerClient } from '../prisma-clients/sqlserver/client';
@Injectable()
export class SQLServerPrismaService
  extends SQLServerClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const adapter = new PrismaMssql({
      server: process.env.SQLSERVER_HOST,
      port: process.env.SQLSERVER_PORT
        ? parseInt(process.env.SQLSERVER_PORT, 10)
        : 1433,
      user: process.env.SQLSERVER_USER,
      password: process.env.SQLSERVER_PASSWORD,
      database: process.env.SQLSERVER_DATABASE,
      options: {
        encrypt: true, 
        trustServerCertificate: true,
      },
    });


    super({ adapter });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('✅ SQL Server connected');
    } catch (error) {
      console.error('❌ Error connecting to SQL Server', error);
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      console.log('❌ SQL Server disconnected');
    } catch (error) {
      console.error('❌ Error disconnecting SQL Server', error);
    }
  }
}
