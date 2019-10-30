import { InstanceType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from 'nestjs-typegoose';
import { FollowedCoachingModel } from './followed-coaching.model';
import { ModelType } from 'typegoose';
import { FollowedCoachingDTO } from './followed-coachings.dto';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';
import { CoachingsService } from '../coachings/coachings.service';
import { UserModel } from '../users/user.model';

/**
 * Service for manage followed coachings save in database, for a given user
 */
@Injectable()
export class FollowedCoachingsService {

  constructor(
    private usersService: UsersService,
    private coachingsService: CoachingsService,
    @InjectModel(FollowedCoachingModel) private readonly followedCoachingModel: ModelType<FollowedCoachingModel>,
  ) { }

  // /**
  //  * Create new coaching for a given user ID
  //  * @param idUser ID of user
  //  * @param followedCoaching Coaching to insert
  //  */
  // async insert(idUser: string, followedCoaching: FollowedCoachingDTO): Promise<InstanceType<FollowedCoachingModel>> {
  //   const user = await this.usersService.findById(idUser);
  //   const coaching = await this.coachingsService.findById(followedCoaching.coaching);
  //   const followedCoachingCreated = this.followedCoachingModel.create({
  //     rating: followedCoaching.rating,
  //     coaching,
  //   });
  //   user.myCoachings.push(followedCoachingCreated);
  //   await user.save();
  //   return user.myCoachings[user.myCoachings.length - 1];
  // }

  /**
   * Find one coaching by his ID for a given user ID
   * @param idUser ID of user
   */
  async insert(idUser: string, coaching: FollowedCoachingDTO): Promise<FollowedCoachingModel> {
    const user = await this.usersService.findById(idUser);
    const c = new this.followedCoachingModel(coaching);
    user.myCoachings.push(c);
    await user.save();
    return user.myCoachings.shift();
  }

  /**
   * Find one coaching by his ID for a given user ID
   * @param idUser ID of user
   */
  async findAll(idUser: string): Promise<FollowedCoachingModel[]> {
    const user = await this.usersService.findById(idUser);
    await user.populate('myCoachings.coaching').execPopulate();
    return user.myCoachings;
  }
}
