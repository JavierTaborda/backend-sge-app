import { Module } from '@nestjs/common';
import { VendorsController } from './vendors.controller';
import { VendorsService } from './vendors.service';
import { MySQLPrismaService } from 'src/services/mysql.service';

@Module({
  controllers: [VendorsController],
  providers: [VendorsService,MySQLPrismaService],

})
export class VendorsModule {}
