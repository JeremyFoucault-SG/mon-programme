import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitHeader } from '@nestjs/swagger';
import { CoverModel } from './cover.model';
import { CoverDTO } from './cover.dto';
import { CoversService } from './covers.service';

@Controller('covers')
@ApiUseTags('Covers')
export class CoversController {

    constructor(private readonly coversService: CoversService) { }

    @Post()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Create new cover' })
    @ApiResponse({ status: 201, description: 'Return cover.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() cover: CoverDTO): Promise<CoverModel> {
        return this.coversService.insert(cover);
    }

    @Get(':id')
    @ApiOperation({ title: 'Get cover by ID' })
    @ApiResponse({ status: 200, description: 'Return cover.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    async readOne(@Param('id') idCover: string): Promise<CoverModel> {
        return this.coversService.findById(idCover);
    }

    @Get()
    @ApiOperation({ title: 'Get all covers' })
    @ApiResponse({ status: 200, description: 'Return an array of covers.' })
    async readAll(): Promise<CoverModel[]> {
        return this.coversService.findAll();
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
