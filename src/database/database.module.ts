import { Module } from '@nestjs/common';
import { MySQLPrismaService } from './mysql.service';
import { SQLServerPrismaService } from './sqlserver.service';

@Module({
  providers: [
    SQLServerPrismaService,
     MySQLPrismaService
  ],
  exports: [
    SQLServerPrismaService, 
    MySQLPrismaService
  ],
})
export class DatabaseModule {}
