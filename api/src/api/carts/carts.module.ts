import { Module } from '@nestjs/common';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { UsersModule } from '../users/users.module';
import { CartModel } from './cart.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forFeature([CartModel]),
    UsersModule,
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
