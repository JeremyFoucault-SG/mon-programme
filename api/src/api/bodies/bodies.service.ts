import { Injectable } from '@nestjs/common';
import { BodyDTO } from './body.dto';
import { BodyModel } from './body.model';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';
import { UsersService } from '../users/users.service';
import { InstanceType } from 'typegoose';

/**
 * Service for manage user body history save in database, for a given user
 */
@Injectable()
export class BodiesService {

  constructor(
    private usersService: UsersService,
    @InjectModel(BodyModel) private readonly bodyModel: ModelType<BodyModel>,
  ) { }

  /**
   * Create new body for a given user ID
   * @param idUser ID of user
   * @param body Body to insert
   */
  async insert(idUser: string, body: BodyDTO): Promise<InstanceType<BodyModel>> {
    const user = await this.usersService.findById(idUser);
    const createdBody = new this.bodyModel(body);
    user.bodies.push(createdBody);
    await user.save();
    return user.bodies[user.bookmarks.length - 1];
  }

  /**
   * Find one body by his ID for a given user ID
   * @param idUser ID of user
   * @param idBody ID of wanted article
   */
  async findById(idUser: string, idBody: string): Promise<InstanceType<BodyModel>> {
    const user = await this.usersService.findById(idUser);
    const body = user.bodies.id(idBody);
    if (!body) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return body;
  }

  /**
   * Find all bodies for a given user ID
   * @param idUser ID of user
   */
  async findAll(idUser: string): Promise<BodyModel[]> {
    const user = await this.usersService.findById(idUser);
    return user.bodies;
  }
}
