import { Module } from '@nestjs/common';
import { VendorsModule } from './modules/vendors/vendors.module';


@Module({
  imports: [VendorsModule],

})
export class AppModule {}
