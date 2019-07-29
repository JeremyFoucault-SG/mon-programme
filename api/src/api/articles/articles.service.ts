import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ArticleModel } from './article.model';
import { ModelType } from 'typegoose';
import { ArticleDTO } from '../../../dist/api/articles/article.dto';

@Injectable()
export class ArticlesService {

  constructor(@InjectModel(ArticleModel) private readonly articleModel: ModelType<ArticleModel>) {}

  async insert(article: ArticleDTO): Promise<ArticleModel> {
    const createdArticle = new this.articleModel(article);
    return await createdArticle.save();
}

}
