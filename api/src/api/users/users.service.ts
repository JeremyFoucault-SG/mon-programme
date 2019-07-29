import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType } from 'typegoose';
import { UserDTO } from './user.dto';
import { EntityExceptionCode, EntityException } from '../../exceptions/entity-exception';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) { }

  /**
   * Create new User in database
   * @param user User to insert
   */
  async insert(user: UserDTO): Promise<UserModel> {
    const userCreated = new this.userModel(user);
    return userCreated.save();
  }

  /**
   * Find one article by his ID
   * @param id ID of wanted article
   */
  async findById(id: string): Promise<UserModel> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return user;
  }

  /**
   * Find all articles present in database
   */
  async findAll(): Promise<UserModel[]> {
    return this.userModel.find({}).exec();
  }

  /**
   * Remove user by his ID
   * @param id ID user to delete
   */
  async remove(id: string): Promise<UserModel> {
    const deletedUser = await this.userModel.findByIdAndRemove(id).exec();

    if (!deletedUser) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }

    return deletedUser;
  }
}
