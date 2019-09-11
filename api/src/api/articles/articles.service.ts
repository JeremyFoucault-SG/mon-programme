import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ArticleModel } from './article.model';
import { ModelType } from 'typegoose';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';
import { ArticleDTO } from './article.dto';

/**
 * Service for manage articles save in database
 */
@Injectable()
export class ArticlesService {

  constructor(@InjectModel(ArticleModel) private readonly articleModel: ModelType<ArticleModel>) { }

  /**
   * Create new Article in database
   * @param article Article to insert
   */
  async insert(article: ArticleDTO): Promise<ArticleModel> {
    const createdArticle = new this.articleModel(article);
    return createdArticle.save();
  }

  /**
   * Find one article by his ID
   * @param title ID of wanted article
   */
  async findByTitle(title: string): Promise<ArticleModel> {
    const article = await this.articleModel.findOne({title}).exec();
    if (!article) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return article;
  }

  /**
   * Find all articles present in database
   */
  async findAll(): Promise<ArticleModel[]> {
    return this.articleModel.find({}).exec();
  }

  /**
   * Delete article by id
   * @param id Id of article
   */
  async delete(id: string): Promise<ArticleModel> {
    const article = await this.articleModel.findByIdAndRemove(id);
    if (!article) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return article;
  }
  /**
   * Update article
   * @param id Id article
   * @param articleDTO
   */
  async update(id: string, articleDTO: ArticleDTO) {
    const article = await this.articleModel.findByIdAndUpdate(id, articleDTO, {
      new: true,
    });
    if (!article) {
      throw new HttpException('Does not exist', HttpStatus.NOT_FOUND);
    }
    return article;
  }
}
