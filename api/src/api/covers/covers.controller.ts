import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { CoverModel } from './cover.model';
import { CoverDTO } from './cover.dto';

@Controller('covers')
export class CoversController {

    @Post()
    async create(@Body() cover: CoverDTO): Promise<CoverModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idCover: string): Promise<CoverModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<CoverModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idCover: string, @Body() cover: CoverDTO): Promise<CoverModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idCover: string): Promise<void> {
        return null;
    }
}
