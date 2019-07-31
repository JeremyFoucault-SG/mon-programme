import { InstanceType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from 'nestjs-typegoose';
import { WishModel } from './wish.model';
import { ModelType } from 'typegoose';
import { WishDTO } from './wish.dto';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';
import { CoachingModel } from '../coachings/coaching.model';
import { CoachingsService } from '../coachings/coachings.service';

/**
 * Service for manage wishes save in database, for a given user
 */
@Injectable()
export class WishesService {

  constructor(
    private usersService: UsersService,
    private coachingsService: CoachingsService,
    @InjectModel(WishModel) private readonly wishgModel: ModelType<WishModel>,
  ) { }

  /**
   * Create new wish for given a user ID
   * @param idUser ID of user
   * @param bookmar Wish to insert
   */
  async insert(idUser: string, wish: WishDTO): Promise<InstanceType<WishModel>> {
    const user = await this.usersService.findById(idUser);
    const coaching = await this.coachingsService.findById(wish.coaching);
    const wishCreated = this.wishgModel.create({ coaching });
    user.wishes.push(wishCreated);
    await user.save();
    return user.wishes[user.wishes.length - 1];
  }

  /**
   * Find one wish by his ID a for given user ID
   * @param idUser ID of user
   * @param idWish ID of wanted wish
   */
  async findById(idUser: string, idWish: string): Promise<InstanceType<WishModel>> {
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
  async findAll(idUser: string): Promise<WishModel[]> {
    const user = await this.usersService.findById(idUser);
    return user.wishes;
  }
}
