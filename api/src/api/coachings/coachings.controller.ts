import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitHeader } from '@nestjs/swagger';
import { CoachingModel } from './coaching.model';
import { CoachingDTO } from './coaching.dto';
import { CoachingsService } from './coachings.service';
import { CoachingQuery } from './coachings.query';

@Controller('coachings')
@ApiUseTags('Coachings')
export class CoachingsController {

    constructor(private readonly coachingsService: CoachingsService) { }

    @Get('search')
    @ApiOperation({ title: 'Get all coachings by query' })
    @ApiResponse({ status: 200, description: 'Return an array of coachings.' })
    async search(@Query() query: CoachingQuery): Promise<CoachingModel[]> {
        return this.coachingsService.search(query);
    }

    @Post()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Create new coaching' })
    @ApiResponse({ status: 201, description: 'Return coaching.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() coaching: CoachingDTO): Promise<CoachingModel> {
        return this.coachingsService.insert(coaching);
    }

    @Get()
    @ApiOperation({ title: 'Get all coachings' })
    @ApiResponse({ status: 200, description: 'Return an array of coachings.' })
    async readAll(): Promise<CoachingModel[]> {
        return this.coachingsService.findAll();
    }

    @Put(':id')
    async update(@Param('id') idCoaching: string, @Body() coaching: CoachingDTO): Promise<CoachingModel> {
        return await this.coachingsService.update(idCoaching, coaching);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idCoaching: string): Promise<CoachingModel> {
        return await this.coachingsService.delete(idCoaching);
    }

    @Get(':urlTitle')
    @ApiOperation({ title: 'Get coaching by title' })
    @ApiResponse({ status: 200, description: 'Return article.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    async readOne(@Param('urlTitle') titleCoaching: string): Promise<CoachingModel> {
        return this.coachingsService.findByTitle(titleCoaching);
    }

}
