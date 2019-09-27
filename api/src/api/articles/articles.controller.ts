import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitHeader } from '@nestjs/swagger';
import { ArticleModel } from './article.model';
import { ArticleDTO } from './article.dto';
import { ArticlesService } from './articles.service';
import { ArticleQuery } from './article.query';
import { CategoryModel } from '../categories/category.model';

@Controller('articles')
@ApiUseTags('Articles')
export class ArticlesController {

  constructor(private readonly articlesService: ArticlesService) { }

  @Get('search')
  @ApiOperation({ title: 'Get all articles by query' })
  @ApiResponse({ status: 200, description: 'Return an array of articles.' })
  async search(@Query() query: ArticleQuery): Promise<ArticleModel[]> {
    return this.articlesService.search(query);
  }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new article' })
  @ApiResponse({ status: 201, description: 'Return article.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() article: ArticleDTO): Promise<ArticleModel> {
    return this.articlesService.insert(article);
  }

  @Get(':urlTitle')
  @ApiOperation({ title: 'Get article by title' })
  @ApiResponse({ status: 200, description: 'Return article.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async readOne(@Param('urlTitle') titleArticle: string): Promise<ArticleModel> {
    return this.articlesService.findByTitle(titleArticle);
  }

  @Get()
  @ApiOperation({ title: 'Get all articles' })
  @ApiResponse({ status: 200, description: 'Return an array of articles.' })
  async readAll(): Promise<ArticleModel[]> {
    return this.articlesService.findAll();
  }

  @Put(':id')
  async update(@Param('id') idArticle: string, @Body() article: ArticleDTO): Promise<ArticleModel> {
    return await this.articlesService.update(idArticle, article);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') idArticle: string): Promise<ArticleModel> {
    return this.articlesService.delete(idArticle);
  }
}
