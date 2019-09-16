import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { ConfigService } from '../../config/config.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModel } from './auth.model';
import { LocalStrategy } from './local.strategy';
import { SettingsService } from '../settings/settings.service';
import { SettingsModule } from '../settings/settings.module';


@Module({
  imports: [
    UsersModule,
    TypegooseModule.forFeature([AuthModel]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        expiresIn: configService.get('JWT_EXPIRESIN'),
      }),
      inject: [ConfigService],
    }),
    SettingsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
