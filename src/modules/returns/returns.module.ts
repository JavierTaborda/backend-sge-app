import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EmailModule } from 'src/email/email.module';
import { ReturnsEmailTemplateService } from './returns-email-template.service';
import { ReturnsImageStorageService } from './returns-image-storage.service';
import { ReturnsController } from './returns.controller';
import { ReturnsService } from './returns.service';

@Module({ imports: [DatabaseModule, EmailModule],
    controllers: [ReturnsController],
    providers: [ReturnsService, ReturnsImageStorageService, ReturnsEmailTemplateService]

})
export class ReturnsModule {}
