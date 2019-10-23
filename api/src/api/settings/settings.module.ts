import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { UsersModule } from '../users/users.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { SettingsModel } from './settings.model';
import { SettingsDTO } from './settings.dto';

@Module({
  imports: [
    UsersModule,
    SettingsModule,
    TypegooseModule.forFeature(
      [{
        typegooseClass: SettingsModel,
        schemaOptions: {
          collection: 'settings',
        },
      }]),
  ],
  controllers: [SettingsController],
  providers: [SettingsService],
  exports: [SettingsService],
})
export class SettingsModule { }
