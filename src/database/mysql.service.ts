import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as MySQLClient } from '../../prisma-clients/mysql';

@Injectable()
export class MySQLPrismaService extends MySQLClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('✅ MySQL connected');
  }
}
