import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { AllExeptionsFilter } from './filters/all-exeptions.filter';

//import * as fs from 'fs';

async function bootstrap() {
  const isProd = process.env.NODE_ENV === 'production';

  //Use without nginx
  // const app = isProd
  //   ? await NestFactory.create(AppModule, {
  //       httpsOptions: {
  //         key: fs.readFileSync(process.env.SSL_KEY_PATH || './ssl/key.key'),
  //         cert: fs.readFileSync(process.env.SSL_CERT_PATH || './ssl/cert.pem'),
  //         ca: fs.readFileSync(process.env.SSL_CA_PATH || './ssl/ca_bundle.pem'),
  //       },
  //     })
  //   : await NestFactory.create(AppModule);

  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
  //root uri
  app.setGlobalPrefix('api');

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
