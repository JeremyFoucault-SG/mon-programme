import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { GoalModel } from './goal.model';
import { GoalDTO } from './goal.dto';

@Controller('goals')
export class GoalsController {

    @Post()
    async create(@Body() goal: GoalDTO): Promise<GoalModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idGoal: string): Promise<GoalModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<GoalModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idGoal: string, @Body() goal: GoalDTO): Promise<GoalModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idGoal: string): Promise<void> {
        return null;
    }
}
