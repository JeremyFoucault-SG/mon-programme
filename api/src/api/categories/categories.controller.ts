import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { CategoryModel } from './category.model';
import { CategoryDTO } from './category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly catergoryService: CategoriesService) {}

    @Post()
    async create(@Body() categories: CategoryDTO): Promise<CategoryModel> {
        return this.catergoryService.insert(categories);
    }

    @Get(':id')
    async readOne(@Param('id') idCategory: string): Promise<CategoryModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<CategoryModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idCategory: string, @Body() category: CategoryDTO): Promise<CategoryModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idCategory: string): Promise<void> {
        return null;
    }
}
