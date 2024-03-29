import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType } from 'typegoose';
import { UserDTO } from './user.dto';
import {
  EntityExceptionCode,
  EntityException,
} from '../../exceptions/entity-exception';
import { InstanceType } from 'typegoose';

/**
 * Service for manage users save in database
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
  ) {}

  /**
   * Create new User
   * @param user User to insert
   */
  async insert(user: UserDTO): Promise<InstanceType<UserModel>> {
    const userCreated = new this.userModel(user);
    return userCreated.save();
  }

  /**
   * Find one user by his ID
   * @param id ID of wanted article
   */
  async findById(id: string): Promise<InstanceType<UserModel>> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return user;
  }

  /**
   * Find all users
   */
  async findAll(): Promise<Array<InstanceType<UserModel>>> {
    return this.userModel.find({}).exec();
  }

  /**
   * Remove user by his ID
   * @param id ID user to delete
   */
  async remove(id: string): Promise<InstanceType<UserModel>> {
    const deletedUser = await this.userModel.findByIdAndRemove(id).exec();

    if (!deletedUser) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }

    return deletedUser;
  }

  async update(id: string, userDTO: UserDTO): Promise<UserModel> {
    const user = await this.userModel.findById(id).exec();
    await user.updateOne({ 'user.settings.infos': userDTO.settings.infos }).exec();
    await user.updateOne({ 'user.settings.contact': userDTO.settings.contact }).exec();
    await user.updateOne({ 'user.settings.paiement': userDTO.settings.paiement }).exec();
    return user;
    // if (!user) {
    //   throw new HttpException('Does not exist', HttpStatus.NOT_FOUND);
    // }
    // return user;
  }
}
