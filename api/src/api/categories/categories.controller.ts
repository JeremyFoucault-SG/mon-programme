import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitHeader } from '@nestjs/swagger';
import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { CategoryModel } from './category.model';
import { CategoryDTO } from './category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
@ApiUseTags('Categories')
export class CategoriesController {

    constructor(private readonly catergoryService: CategoriesService) { }

    @Post()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Create new category' })
    @ApiResponse({ status: 201, description: 'Return category.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() category: CategoryDTO): Promise<CategoryModel> {
        return this.catergoryService.insert(category);
    }

    @Get(':id')
    @ApiOperation({ title: 'Get category by ID' })
    @ApiResponse({ status: 200, description: 'Return category.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    async readOne(@Param('id') idCategory: string): Promise<CategoryModel> {
        return this.catergoryService.findById(idCategory);
    }

    @Get()
    @ApiOperation({ title: 'Get all categories' })
    @ApiResponse({ status: 200, description: 'Return an array of categories.' })
    async readAll(): Promise<CategoryModel[]> {
        return this.catergoryService.findAll();
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
