import { Module } from '@nestjs/common';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { UsersModule } from '../users/users.module';
import { CartModel } from './cart.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { CoachingsModule } from '../coachings/coachings.module';

@Module({
  imports: [
    TypegooseModule.forFeature(
      [{
        typegooseClass: CartModel,
        schemaOptions: {
          collection: 'carts',
        },
      }]),
    CoachingsModule,
    UsersModule,
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule { }
