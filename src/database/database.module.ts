import { Module } from '@nestjs/common';
import { MySQLPrismaService } from './mysql.service';
import { SQLServerPrismaService } from './sqlserver.service';
import { SQLServer2PrismaService } from './sqlserver2.service';
import { TestMySQLPrismaService } from './testmysql.service';

@Module({
  providers: [
    SQLServerPrismaService,
    SQLServer2PrismaService,
    MySQLPrismaService, 
    TestMySQLPrismaService
  ],
  exports: [
    SQLServerPrismaService, 
    SQLServer2PrismaService,
    MySQLPrismaService,
    TestMySQLPrismaService
  ],
})
export class DatabaseModule {}
