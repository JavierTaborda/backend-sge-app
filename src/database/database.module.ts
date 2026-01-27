import { Module } from '@nestjs/common';
import { MySQLPrismaService } from './mysql.service';
import { SQLServerPrismaService } from './sqlserver.service';
import { TestMySQLPrismaService } from './testmysql.service';

@Module({
  providers: [
    SQLServerPrismaService,
    MySQLPrismaService, 
    TestMySQLPrismaService
  ],
  exports: [
    SQLServerPrismaService, 
    MySQLPrismaService,
    TestMySQLPrismaService
  ],
})
export class DatabaseModule {}
