import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { CoachingModel } from './coaching.model';
import { CoachingDTO } from './coaching.dto';

@Controller('coachings')
export class CoachingsController {

    @Post()
    async create(@Body() coaching: CoachingDTO): Promise<CoachingModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idCoaching: string): Promise<CoachingModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<CoachingModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idCoaching: string, @Body() coaching: CoachingDTO): Promise<CoachingModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idCoaching: string): Promise<void> {
        return null;
    }
}
