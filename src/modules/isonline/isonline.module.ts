import { Module } from '@nestjs/common';
import { IsOnlineController } from './isonline.controller';

@Module({
    controllers:[IsOnlineController]
})
export class IsOnlineModule {}
