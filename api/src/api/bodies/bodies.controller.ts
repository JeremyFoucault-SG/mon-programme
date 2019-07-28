import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { BodyModel } from './body.model';
import { BodyDTO } from './body.dto';

@Controller('bodies')
export class BodiesController {

    @Post()
    async create(@Body() body: BodyDTO): Promise<BodyModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idBody: string): Promise<BodyModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<BodyModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idBody: string, @Body() body: BodyDTO): Promise<BodyModel> {
        return null;
    }
}
