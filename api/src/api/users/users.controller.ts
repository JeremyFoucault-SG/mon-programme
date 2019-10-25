import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UserModel } from './user.model';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { UserJWTPayload, User } from 'src/decorators/user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@ApiUseTags('Users')
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

  // @Get()
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  // @ApiOperation({ title: 'Get setting by ID' })
  // @ApiResponse({ status: 200, description: 'Return setting.' })
  // @ApiResponse({ status: 404, description: 'Not Found.' })
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  // async readOne(@User() user: UserJWTPayload): Promise<UserModel> {
  //   return this.usersService.findById(user.userId);
  // }

  @Put(':id')
  async update(
    @Param('id') idUser: string,
    @Body() user: UserDTO,
  ): Promise<UserModel> {
    return this.usersService.update(idUser, user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') idUser: string): Promise<void> {
    return null;
  }
}
