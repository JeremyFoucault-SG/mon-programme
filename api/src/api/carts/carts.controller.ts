import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { CartModel } from './cart.model';
import { User } from '../../decorators/user.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CartsService } from './carts.service';

@Controller('carts')
export class CartsController {

  constructor(private readonly cartsServices: CartsService) { }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new cart for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return cart.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@User('id') idUser: string, @Body() cart: CartModel): Promise<CartModel> {
    return this.cartsServices.insert(idUser, cart);
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

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new cart for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return cart.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async readAll(@User('id') idUser: string): Promise<CartModel[]> {
    return this.cartsServices.findAll(idUser);
  }

  @Put(':id')
  async update(@User('id') idUser: string, @Param('id') idCart: string, @Body() cart: CartModel): Promise<CartModel> {
    return null;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@User('id') idUser: string, @Param('id') idCart: string): Promise<void> {
    return null;
  }
}
