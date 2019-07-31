import { InstanceType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from 'nestjs-typegoose';
import { FollowedCoachingModel } from './followed-coaching.model';
import { ModelType } from 'typegoose';
import { FollowedCoachingDTO } from './followed-coachings.dto';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';
import { CoachingsService } from '../coachings/coachings.service';

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

  /**
   * Create new coaching for a given user ID
   * @param idUser ID of user
   * @param followedCoaching Coaching to insert
   */
  async insert(idUser: string, followedCoaching: FollowedCoachingDTO): Promise<InstanceType<FollowedCoachingModel>> {
    const user = await this.usersService.findById(idUser);
    const coaching = await this.coachingsService.findById(followedCoaching.coaching);
    const followedCoachingCreated = this.followedCoachingModel.create({
      rating: followedCoaching.rating,
      coaching,
    });
    user.followedCoachings.push(followedCoachingCreated);
    await user.save();
    return user.followedCoachings[user.followedCoachings.length - 1];
  }

  /**
   * Find one coaching by his ID for a given user ID
   * @param idUser ID of user
   * @param idFollowedCoaching ID of wanted coaching
   */
  async findById(idUser: string, idFollowedCoaching: string): Promise<InstanceType<FollowedCoachingModel>> {
    const user = await this.usersService.findById(idUser);
    const coaching = user.followedCoachings.id(idFollowedCoaching);
    if (!coaching) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return coaching;
  }

  /**
   * Find all followed coaching for a given user ID
   * @param idUser ID of user
   */
  async findAll(idUser: string): Promise<FollowedCoachingModel[]> {
    const user = await this.usersService.findById(idUser);
    return user.followedCoachings;
  }
}
