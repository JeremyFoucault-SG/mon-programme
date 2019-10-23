import { InstanceType } from 'typegoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from 'nestjs-typegoose';
import { WishModel } from './wish.model';
import { ModelType } from 'typegoose';
import { WishDTO } from './wish.dto';
import {
  EntityException,
  EntityExceptionCode,
} from '../../exceptions/entity-exception';
import { CoachingModel } from '../coachings/coaching.model';
import { CoachingsService } from '../coachings/coachings.service';
import { ArticlesService } from '../articles/articles.service';
import { ArticleModel } from '../articles/article.model';
import { WishQuery } from './wish.query';

/**
 * Service for manage wishes save in database, for a given user
 */
@Injectable()
export class WishesService {
  constructor(
    private usersService: UsersService,
    private coachingsService: CoachingsService,
    private articlesService: ArticlesService,
    @InjectModel(WishModel) private readonly wishModel: ModelType<WishModel>,
  ) {}

  /**
   * Create new coaching wish for given a user ID
   * @param idUser ID of user
   * @param bookmar Coaching to insert
   */
  async insertCoachings(
    idUser,
    wish: WishDTO,
  ): Promise<InstanceType<WishModel>> {
    const user = await this.usersService.findById(idUser);
    const coaching = await this.coachingsService.findById(wish.wishId);
    const wishCreated = new this.wishModel({ coaching });
    user.wishes.push(wishCreated);
    await user.save();
    return user.wishes[user.wishes.length - 1];
  }

  /**
   * Create new article wish for given a user ID
   * @param idUser ID of user
   * @param bookmar Article to insert
   */
  async insertArticle(idUser, wish: WishDTO): Promise<InstanceType<WishModel>> {
    const user = await this.usersService.findById(idUser);
    const article = await this.articlesService.findById(wish.wishId);
    const wishCreated = new this.wishModel({ article });
    user.wishes.push(wishCreated);
    await user.save();
    return user.wishes[user.wishes.length - 1];
  }

  /**
   * Find one wish by his ID a for given user ID
   * @param idUser ID of user
   * @param idWish ID of wanted wish
   */
  async findById(
    idUser: string,
    idWish: string,
  ): Promise<InstanceType<WishModel>> {
    const user = await this.usersService.findById(idUser);
    const wish = user.wishes.id(idWish);
    if (!wish) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return wish;
  }

  /**
   * Find all whishes for a given user ID
   * @param idUser ID of user
   */
  async searchArticle(idUser: string, limit?: number): Promise<WishModel[]> {
    const user = await this.usersService.findById(idUser);
    await user.populate('wishes.article').execPopulate();
    const allWish = user.wishes.filter(w => w.article);
    if (limit) {
      return allWish.slice(0, +limit);
    } else {
      return allWish;
    }
  }

  async searchCoaching(idUser: string, limit?: number): Promise<WishModel[]> {
    const user = await this.usersService.findById(idUser);
    await user.populate('wishes.coaching').execPopulate();
    const allWish = user.wishes.filter(w => w.coaching);
    if (limit) {
      return allWish.slice(0, +limit);
    } else {
      return allWish;
    }
  }

  async deleteWish(idUser: string, id: string): Promise<WishModel> {
    const user = await this.usersService.findById(idUser);
    const wish = await user.wishes.id(id);
    if (!wish) {
      throw new HttpException('Does not exist', HttpStatus.NOT_FOUND);
    }
    await wish.remove();
    await user.save();
    return wish;
  }
}
