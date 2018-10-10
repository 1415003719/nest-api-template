require('dotenv').config({ path: './config/env/.env-' + process.env.NODE_ENV });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT);
  console.log(`${process.env.APP_NAME} is running in http://localhost:${process.env.APP_PORT}`);
}
bootstrap();
