import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from './user.model';

@Module({
  imports: [
    TypegooseModule.forFeature(
      [{
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'users',
        },
      }]),
    UsersModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
