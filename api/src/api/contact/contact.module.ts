import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { ConfigService } from '../../config/config.service';
import { DbModule } from '../../db/db.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContactModel } from './contact.model';

@Module({
  controllers: [ContactController],
  imports: [
    DbModule,
    TypegooseModule.forFeature(
      [{
        typegooseClass: ContactModel,
        schemaOptions: {
          collection: 'coachings',
        },
      }]),
    MailerModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get('MAIL_HOST'),
          port: 587,
          secure: false,
          auth: {
            user: configService.get('MAIL_USER'),
            pass: configService.get('MAIL_PASS'),
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class ContactModule { }
