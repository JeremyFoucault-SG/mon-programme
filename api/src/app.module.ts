import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ApiModule } from './api/api.module';
import { LoggerModule } from './logger/logger.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    DbModule,
    ConfigModule,
    ApiModule,
    LoggerModule,
  ],
})
export class AppModule { }
