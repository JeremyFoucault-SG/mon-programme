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
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
