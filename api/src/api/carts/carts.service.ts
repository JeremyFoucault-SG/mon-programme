import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from 'nestjs-typegoose';
import { InstanceType } from 'typegoose';
import { CartModel } from './cart.model';
import { ModelType } from 'typegoose';
import { CartDTO } from './cart.dto';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';
import { CoachingsService } from '../coachings/coachings.service';

/**
 * Service for manage carts save in database, for a given user
 */
@Injectable()
export class CartsService {

  constructor(
    private usersService: UsersService,
    private coachingsService: CoachingsService,
    @InjectModel(CartModel) private readonly cartModel: ModelType<CartModel>,
  ) { }

  /**
   * Create new cart for a given user ID
   * @param idUser ID of user
   * @param cart Cart to insert
   */
  async insert(idUser: string, cart: CartDTO): Promise<InstanceType<CartModel>> {
    const user = await this.usersService.findById(idUser);
    const coaching = await this.coachingsService.findById(cart.cartId);
    const createdCart = new this.cartModel({coaching});
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
    await user.populate('carts.coaching').execPopulate();
    return user.carts.filter(w => w.coaching);
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
  async deleteCart(idUser: string, id: string): Promise<CartModel> {
    const user = await this.usersService.findById(idUser);
    const cart = await user.carts.id(id);
    if (!cart) {
      throw new HttpException('Does not exist', HttpStatus.NOT_FOUND);
    }
    await cart.remove();
    await user.save();
    return cart;
  }
}
