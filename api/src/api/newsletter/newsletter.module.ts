import { Module } from '@nestjs/common';
import { NewsletterController } from './newsletter.controller';
import { NewsletterService } from './newsletter.service';
import { NewsletterModel } from './newsletter.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([NewsletterModel])],
  controllers: [NewsletterController],
  providers: [NewsletterService],
})
export class NewsletterModule {}
