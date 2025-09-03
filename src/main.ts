import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { AllExeptionsFilter } from './filters/all-exeptions.filter';

async function bootstrap() {
  const isProd = process.env.NODE_ENV === 'production';

  const app = isProd
    ? await NestFactory.create(AppModule, {
        httpsOptions: {
          key: fs.readFileSync(process.env.SSL_KEY_PATH || './cert/key.pem'),
          cert: fs.readFileSync(process.env.SSL_CERT_PATH || './cert/cert.pem'),
        },
      })
    : await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalFilters(new AllExeptionsFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT || (isProd ? 443 : 3000));
}
bootstrap();
