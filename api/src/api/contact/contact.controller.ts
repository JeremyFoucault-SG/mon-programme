import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { MailerService } from '@nest-modules/mailer';
import { ContactDTO } from './contact.dto';
import { ConfigService } from '../../config/config.service';
import { InjectModel } from 'nestjs-typegoose';
import { ContactModel } from './contact.model';
import { ModelType } from 'typegoose';

@Controller()
export class ContactController {
    constructor(
        private readonly configService: ConfigService,
        private readonly mailerService: MailerService,
        @InjectModel(ContactModel) private readonly contactModel: ModelType<ContactModel>
    ) { }

    @Post('contact')
    contact(@Body() body: ContactDTO) {
        this
            .mailerService
            .sendMail({
                to: this.configService.get('MAIL_TO_CONTACT'),
                from: this.configService.get('MAIL_USER'),
                subject: `Prise de contact - ${body.name}`,
                html: `
                <p>${body.name}</p>
                <p>${body.phone}</p>
                <p>${body.email}</p>
                <br><br>
                <p>${body.message}</p>
                `,
            })
            // tslint:disable-next-line: no-empty
            .then(() => { })
            // tslint:disable-next-line: no-console
            .catch((err) => console.log(err));
    }

    @Post('newsletter')
    async newsletter(@Body() body) {
        const contact = new this.contactModel({ email: body.email });
        await contact.save();
    }
}
