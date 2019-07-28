import { Controller, Get, Post, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { BookmarkModel } from './bookmark.model';

@Controller('bookmarks')
export class BookmarksController {

    @Post()
    async create(@Body() bookmark: BookmarkModel): Promise<BookmarkModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<BookmarkModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idBookmark: string): Promise<void> {
        return null;
    }
}
