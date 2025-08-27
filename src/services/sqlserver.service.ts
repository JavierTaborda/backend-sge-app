import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as SQLServerClient } from '../../prisma-clients/sqlserver';

@Injectable()
export class SQLServerPrismaService extends SQLServerClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('✅ SQL Server connected');
  }
}
