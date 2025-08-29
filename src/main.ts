import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExeptionsFilter } from './filters/all-exeptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //enable cors
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });


  //try catch global
  app.useGlobalFilters(new AllExeptionsFilter());

  // Enable global validation by class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // delete properties no declared in DTO
      forbidNonWhitelisted: true, // trow error if have extra properties 
      transform: true, 
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
