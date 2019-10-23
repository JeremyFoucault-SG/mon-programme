import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitHeader } from '@nestjs/swagger';
import { GoalModel } from './goal.model';
import { GoalDTO } from './goal.dto';
import { GoalsService } from './goals.service';

@Controller('goals')
@ApiUseTags('Goals')
export class GoalsController {

    constructor(private readonly goalsService: GoalsService) { }
    @Post()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Create new goal' })
    @ApiResponse({ status: 201, description: 'Return goal.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() goal: GoalDTO): Promise<GoalModel> {
        return this.goalsService.insert(goal);
    }

    @Get(':id')
    @ApiOperation({ title: 'Get goal by ID' })
    @ApiResponse({ status: 200, description: 'Return goal.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    async readOne(@Param('id') idGoal: string): Promise<GoalModel> {
        return this.goalsService.findById(idGoal);
    }

    @Get()
    @ApiOperation({ title: 'Get all goals' })
    @ApiResponse({ status: 200, description: 'Return an array of goals.' })
    async readAll(): Promise<GoalModel[]> {
        return this.goalsService.findAll();
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
