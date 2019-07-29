import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Param, Body } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Create new user' })
    @ApiResponse({ status: 201, description: 'Return user.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() user: UserDTO): Promise<UserModel> {
        return this.usersService.insert(user);
    }

    @Get(':id')
    @ApiBearerAuth()
    @ApiOperation({ title: 'Get article by ID' })
    @ApiResponse({ status: 200, description: 'Return article.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    async readOne(@Param('id') idUser: string): Promise<UserModel> {
      return this.usersService.findById(idUser);
    }

    @Get()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Get article by ID' })
    @ApiResponse({ status: 200, description: 'Return article.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    async readAll(): Promise<UserModel[]> {
        return this.usersService.findAll();
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
