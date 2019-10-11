import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ApiModule } from './api/api.module';
import { LoggerModule } from './logger/logger.module';
import { DbModule } from './db/db.module';
import { ConfigService } from './config/config.service';
import { existsSync, mkdirSync } from 'fs';
@Module({
  imports: [
    DbModule,
    ConfigModule,
    ApiModule,
    LoggerModule,
  ],
})
export class AppModule {
  constructor(readonly configService: ConfigService) {
    process.env.UPLOAD_PATH = configService.get('UPLOAD_PATH');
    if (!existsSync(configService.get('UPLOAD_PATH'))) {
      mkdirSync(configService.get('UPLOAD_PATH'), { recursive: true });
    }
  }
 }
