import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType } from 'typegoose';
import { UserDTO } from './user.dto';
import { EntityExceptionCode, EntityException } from '../../exceptions/entity-exception';

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async createUser(user: UserDTO): Promise<UserModel> {
        const userCreated = new this.userModel(user);
        return userCreated.save();
    }

    async removeUser(id: string): Promise<UserModel> {
        const deletedUser = await this.userModel.findByIdAndRemove(id).exec();

        if (!deletedUser) {
            throw new EntityException(EntityExceptionCode.NOT_FOUND);
        }

        return deletedUser;
    }
}
