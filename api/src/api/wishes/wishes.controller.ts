import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { WishModel } from './wish.model';
import { WishDTO } from './wish.dto';

@Controller('wishes')
export class WishesController {

    @Post()
    async create(@Body() wish: WishDTO): Promise<WishModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idWish: string): Promise<WishModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<WishModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idWish: string, @Body() wish: WishDTO): Promise<WishModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idWish: string): Promise<void> {
        return null;
    }
}
