import { Controller, Get, Post, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { BookmarkModel } from './bookmark.model';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '../../decorators/user.decorator';
import { BookmarksService } from './bookmarks.service';
import { BookmarkDTO } from './bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {

  constructor(private readonly bookmarksServices: BookmarksService) { }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new body for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return body.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@User('id') idUser: string, @Body() bookmark: BookmarkDTO): Promise<BookmarkModel> {
    return this.bookmarksServices.insert(idUser, bookmark);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get all bookmarks of current authenticated user' })
  @ApiResponse({ status: 200, description: 'Return an array of bookmarks.' })
  async readAll(@User('id') idUser: string): Promise<BookmarkModel[]> {
    return this.bookmarksServices.findAll(idUser);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@User('id') idUser: string, @Param('id') idBookmark: string): Promise<void> {
    return null;
  }
}
