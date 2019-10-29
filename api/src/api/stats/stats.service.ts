import { InstanceType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from 'nestjs-typegoose';
import { StatModel } from './stat.model';
import { ModelType } from 'typegoose';
import { StatDTO } from './stat.dto';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';

/**
 * Service for manage stats save in database, for a given user
 */
@Injectable()
export class StatsService {

  constructor(
    private usersService: UsersService,
    @InjectModel(StatModel) private readonly statModel: ModelType<StatModel>,
  ) { }

  /**
   * Create new coaching for a given user ID
   * @param idUser ID of user
   * @param stat Stat to insert
   */
  async insert(idUser: string, stat: StatDTO): Promise<InstanceType<StatModel>> {
    const user = await this.usersService.findById(idUser);
    const statCreated = this.statModel.create(stat);
    user.stats.push(statCreated);
    await user.save();
    return user.myCoachings[user.myCoachings.length - 1];
  }

  /**
   * Find one stat by his ID for a given user ID
   * @param idUser ID of current user
   * @param idStat ID of wanted stat
   */
  async findById(idUser: string, idStat: string): Promise<InstanceType<StatModel>> {
    const user = await this.usersService.findById(idUser);
    const stat = user.stats.id(idStat);
    if (!stat) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return stat;
  }

  /**
   * Find all stats for given a user ID
   * @param idUser ID of user
   */
  async findAll(idUser: string): Promise<StatModel[]> {
    const user = await this.usersService.findById(idUser);
    return user.stats;
  }
}
