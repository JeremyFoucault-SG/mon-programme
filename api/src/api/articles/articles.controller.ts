import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { ArticleModel } from './article.model';
import { ArticleDTO } from './article.dto';

@Controller('articles')
export class ArticlesController {

    @Post()
    async create(@Body() article: ArticleDTO): Promise<ArticleModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idArticle: string): Promise<ArticleModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<ArticleModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idArticle: string, @Body() article: ArticleDTO): Promise<ArticleModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idArticle: string): Promise<void> {
        return null;
    }
}
