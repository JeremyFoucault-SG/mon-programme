import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { NewsletterModel } from './newsletter.model';
import { ModelType } from 'typegoose';
import { NewsletterDTO } from './newsletter.dto';

@Injectable()
export class NewsletterService {

    constructor(@InjectModel(NewsletterModel) private readonly newsletterModel: ModelType<NewsletterModel>) { }

    async findAll(): Promise<NewsletterModel[]> {
      return this.newsletterModel.find({}).exec();
    }
  
    async findById(id: string): Promise<NewsletterModel> {
      return this.newsletterModel.findById(id).exec();
    }
  
    async insert(newsletter: NewsletterDTO): Promise<NewsletterModel> {
      const createdNewsletter = new this.newsletterModel(newsletter);
      return createdNewsletter.save();
    }
}
