import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ArticleModel } from './article.model';
import { ModelType, InstanceType } from 'typegoose';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';
import { ArticleDTO } from './article.dto';
import { ArticleQuery } from './article.query';
import { CategoriesService } from '../categories/categories.service';
import { CategoryModel } from '../categories/category.model';
/**
 * Service for manage articles save in database
 */
@Injectable()
export class ArticlesService {

  constructor(
    @InjectModel(ArticleModel) private readonly articleModel: ModelType<ArticleModel>,
  ) { }

  /**
   * Create new Article in databased
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
  async findByTitle(urlTitle: string): Promise<ArticleModel> {
    const article = await this.articleModel.findOne({ urlTitle }).exec();
    if (!article) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return article;
  }

  async search(query: ArticleQuery): Promise<ArticleModel[]> {
    const pipe: any[] = [];
    if (query.categories) {
      pipe.push(
        {
          $match: {
            'categories.title': { $regex: `${Array.isArray(query.categories) ? query.categories.join('|') : query.categories}`, $options: 'i' },
          },
        },
      );
    }
    if (query.date) {
      pipe.push(
        { $sort: { date: +query.date } },
      );
    }
    if (query.limit) {
      pipe.push(
        { $limit: +query.limit },
      );
    }
    if (query.skip) {
      pipe.push(
        { $skip: +query.skip },
      );
    }
    if (pipe.length > 0) {
      return this.articleModel.aggregate(pipe).exec();
    } else {
      return this.articleModel.find({}).exec();
    }

  }

  /**
   * Find all articles present in database
   */
  async findAll(): Promise<Array<InstanceType<ArticleModel>>> {
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
