import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Starting server at port 3004');

  const app = await NestFactory.create(AppModule);
  await app.listen(3004);
}
bootstrap();
