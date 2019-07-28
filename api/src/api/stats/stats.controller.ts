import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { StatModel } from './stat.model';
import { StatDTO } from './stat.dto';

@Controller('stats')
export class StatsController {

    @Post()
    async create(@Body() stat: StatDTO): Promise<StatModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idStat: string): Promise<StatModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<StatModel> {
        return null;
    }

    @Put()
    async update(@Param('id') idStat: string, @Body() stat: StatDTO): Promise<StatModel> {
        return null;
    }
}
