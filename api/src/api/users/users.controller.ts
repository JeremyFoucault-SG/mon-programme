import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Param, Body } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserDTO } from './user.dto';

@Controller('users')
export class UsersController {

    @Post()
    async create(@Body() user: UserDTO): Promise<UserModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idUser: string): Promise<UserModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<UserModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idUser: string, @Body() user: UserDTO): Promise<UserModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idUser: string): Promise<void> {
        return null;
    }
}
