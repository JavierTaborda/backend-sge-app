import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AllExeptionsFilter } from './filters/all-exeptions.filter';

//import * as fs from 'fs';

async function bootstrap() {
  const isProd = process.env.NODE_ENV === 'production';

  const app = await NestFactory.create(AppModule);
  //security headers
  app.use(helmet({
    contentSecurityPolicy: false
  }));

  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

  //root uri
  app.setGlobalPrefix('api');

  // global guard for jwt auth
  //app.useGlobalGuards(new JwtAuthGuard());

  // enabled cores from any dispositive
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  //try catch global
  app.useGlobalFilters(new AllExeptionsFilter());

  // Pipe for dtos
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
