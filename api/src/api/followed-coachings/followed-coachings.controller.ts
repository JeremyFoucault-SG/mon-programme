import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { FollowedCoachingModel } from './followed-coaching.model';
import { FollowedCoachingDTO } from './followed-coachings.dto';

@Controller('followed-coachings')
export class FollowedCoachingsController {

    @Post()
    async create(@Body() coaching: FollowedCoachingDTO): Promise<FollowedCoachingModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idCoaching: string): Promise<FollowedCoachingModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<FollowedCoachingModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idCoaching: string, @Body() coaching: FollowedCoachingDTO): Promise<FollowedCoachingModel> {
        return null;
    }
}
