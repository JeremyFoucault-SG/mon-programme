import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './config/config.service';

export async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  const config: ConfigService = app.get('ConfigService');

  await app.listen(config.get('HTTP_PORT'));

  return app;
}
if (!process.env.IN_MEMORY_DB) {
  bootstrap();
}
