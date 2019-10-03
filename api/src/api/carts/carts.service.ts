import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from 'nestjs-typegoose';
import { InstanceType } from 'typegoose';
import { CartModel } from './cart.model';
import { ModelType } from 'typegoose';
import { CartDTO } from './cart.dto';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';

/**
 * Service for manage carts save in database, for a given user
 */
@Injectable()
export class CartsService {

  constructor(
    private usersService: UsersService,
    @InjectModel(CartModel) private readonly cartModel: ModelType<CartModel>,
  ) { }

  /**
   * Create new cart for a given user ID
   * @param idUser ID of user
   * @param cart Cart to insert
   */
  async insert(idUser: string, cart: CartDTO): Promise<InstanceType<CartModel>> {
    const user = await this.usersService.findById(idUser);
    const createdCart = new this.cartModel(cart);
    user.carts.push(createdCart);
    await user.save();
    return user.carts[user.carts.length - 1];
  }

  /**
   * Find one cart by his ID for a given user ID
   * @param idUser ID of user
   * @param idCart ID of wanted article
   */
  async findById(idUser: string, idCart: string): Promise<InstanceType<CartModel>> {
    const user = await this.usersService.findById(idUser);
    const cart = user.carts.id(idCart);
    if (!cart) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return cart;
  }

  /**
   * Find all carts present in database for a given user ID
   * @param idUser ID of user
   */
  async findAll(idUser: string): Promise<CartModel[]> {
    const user = await this.usersService.findById(idUser);
    return user.carts;
  }

  /**
   * Update cart
   * @param id Id cart
   * @param cartDTO
   */
  async update(id: string, cartDTO: CartModel) {
    const cart = await this.cartModel.findByIdAndUpdate(id, cartDTO, {
      new: true,
    });
    if (!cart) {
      throw new HttpException('Does not exist', HttpStatus.NOT_FOUND);
    }
    return cart;
  }
}
