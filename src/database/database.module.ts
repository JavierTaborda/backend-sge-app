import { Module } from '@nestjs/common';
import { SQLServerPrismaService } from './sqlserver.service';
//import { MySQLPrismaService } from './mysql.service';

@Module({
  providers: [
    SQLServerPrismaService,
    // MySQLPrismaService
  ],
  exports: [
    SQLServerPrismaService, 
   // MySQLPrismaService
  ],
})
export class DatabaseModule {}
