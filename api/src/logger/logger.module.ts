import { Module, Global } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston'
import { ConfigService } from '../config/config.service';

@Global()
@Module({
    imports: [
        WinstonModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                level: configService.get('LOG_LEVEL'),
                format: winston.format.json(),
                transports: [
                    new winston.transports.Console({ format: winston.format.simple()}),
                ],
            }),
            inject: [ConfigService],
        }),
    ],
})
export class LoggerModule { }
