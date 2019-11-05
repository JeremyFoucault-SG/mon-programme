import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { WishModel } from './wish.model';
import { WishDTO } from './wish.dto';
import { WishesService } from './wishes.service';
import { User, UserJWTPayload } from '../../decorators/user.decorator';
import { userInfo } from 'os';
import { threadId } from 'worker_threads';
import {
  ApiBearerAuth,
  ApiUseTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ArticleModel } from '../articles/article.model';
import { WishQuery } from './wish.query';

@Controller('wishes')
@ApiUseTags('Wishes')
export class WishesController {
  constructor(private readonly wishService: WishesService) {}

  @Post('coachings')
  @UseGuards(AuthGuard('jwt'))
  async createWishCoaching(
    @User() user: UserJWTPayload,
    @Body() wish: WishDTO,
  ): Promise<WishModel> {
    return this.wishService.insertCoachings(user.userId, wish);
  }

  @Post('articles')
  @UseGuards(AuthGuard('jwt'))
  async createWishArticle(
    @User() user: UserJWTPayload,
    @Body() wish: WishDTO,
  ): Promise<WishModel> {
    return this.wishService.insertArticle(user.userId, wish);
  }

  @Get('articles')
  @UseGuards(AuthGuard('jwt'))
  async readAllArticles(@User() user: UserJWTPayload, @Query() query?: WishQuery): Promise<WishModel[]> {
    return this.wishService.searchArticle(user.userId, query.limit);
  }

  @Get('articles/:id')
  @UseGuards(AuthGuard('jwt'))
  async findWishAriclesbyId(@User() user: UserJWTPayload, @Param('id') idWish: string): Promise<WishModel> {
    return this.wishService.findById(user.userId, idWish);
  }

  @Get('coachings')
  @UseGuards(AuthGuard('jwt'))
  async readAllCoachings(@User() user: UserJWTPayload, @Query() query?: WishQuery): Promise<WishModel[]> {
    return this.wishService.searchCoaching(user.userId, query.limit);
  }

  @Get(':id')
  async readOne(@Param('id') idWish: string): Promise<WishModel> {
    return null;
  }

  @Put(':id')
  async update(
    @Param('id') idWish: string,
    @Body() wish: WishDTO,
  ): Promise<WishModel> {
    return null;
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteWish(
    @User() user: UserJWTPayload,
    @Param('id') idArticle: string,
  ): Promise<WishModel> {
    return await this.wishService.deleteWish(user.userId, idArticle);
  }
}
