import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { CartModel } from './cart.model';

@Controller('carts')
export class CartsController {

    @Post()
    async create(@Body() cart: CartModel): Promise<CartModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idCart: string): Promise<CartModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<CartModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idCart: string, @Body() cart: CartModel): Promise<CartModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idCart: string): Promise<void> {
        return null;
    }
}
