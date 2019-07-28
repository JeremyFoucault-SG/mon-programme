import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigService } from '../config/config.service';

@Module({
    imports: [
        TypegooseModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get('MONGODB_URI'),
                useNewUrlParser: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DbModule { }
