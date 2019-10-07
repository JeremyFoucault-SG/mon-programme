import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param, UseGuards } from '@nestjs/common';
import { CartModel } from './cart.model';
import { User, UserJWTPayload } from '../../decorators/user.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CartsService } from './carts.service';
import { AuthGuard } from '@nestjs/passport';
import { CartDTO } from './cart.dto';
@Controller('carts')
export class CartsController {

  constructor(private readonly cartsServices: CartsService) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ title: 'Create new cart for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return cart.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@User() user: UserJWTPayload, @Body() cart: CartDTO): Promise<CartModel> {
    return this.cartsServices.insert(user.userId, cart);
  }
  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ title: 'Create new cart for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return cart.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async readAll(@User() user: UserJWTPayload): Promise<CartModel[]> {
    return this.cartsServices.findAll(user.userId);
  }
  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new cart for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return cart.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async readOne(@User('id') idUser: string, @Param('id') idCart: string): Promise<CartModel> {
    return this.cartsServices.findById(idUser, idCart);
  }

  @Put(':id')
  async update(@User('id') idUser: string, @Param('id') idCart: string, @Body() cart: CartModel): Promise<CartModel> {
    return await this.cartsServices.update(idCart, cart);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@User() user: UserJWTPayload, @Param('id') idCart: string): Promise<CartModel> {
    return await this.cartsServices.deleteCart(user.userId, idCart);
  }
}
