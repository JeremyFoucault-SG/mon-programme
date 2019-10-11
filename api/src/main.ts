import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  // redirect / openapi doc
  app.use('^/$', (req, res) => {
    res.redirect(process.env.NODE_ENV === 'production' ? '/api/doc/' : 'doc');
  });

  const config: ConfigService = app.get('ConfigService');

  const options = new DocumentBuilder()
    .setTitle('Mon Programme API')
    .setDescription('Mon Programme API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  app.enableCors();

  app.useStaticAssets(config.get('UPLOAD_PATH'), { prefix: '/images/' });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));


  await app.listen(config.get('HTTP_PORT'));

  return app;
}
if (!process.env.IN_MEMORY_DB) {
  bootstrap();
}
