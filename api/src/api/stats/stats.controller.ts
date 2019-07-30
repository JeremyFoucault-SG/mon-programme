import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { StatModel } from './stat.model';
import { StatDTO } from './stat.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StatsService } from './stats.service';
import { User } from '../../decorators/user.decorator';

@Controller('stats')
export class StatsController {

  constructor(private readonly statsService: StatsService) { }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new stat for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return stat.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@User('id') idUser: string, @Body() stat: StatDTO): Promise<StatModel> {
    return this.statsService.insert(idUser, stat);
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get stat by ID of current authenticated user' })
  @ApiResponse({ status: 200, description: 'Return stat.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async readOne(@User('id') idUser: string, @Param('id') idStat: string): Promise<StatModel> {
    return this.statsService.findById(idUser, idStat);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get all stats of current authenticated user' })
  @ApiResponse({ status: 200, description: 'Return an array of stats.' })
  async readAll(@User('id') idUser: string): Promise<StatModel[]> {
    return this.statsService.findAll(idUser);
  }

  @Put()
  async update(@User('id') idUser: string, @Param('id') idStat: string, @Body() stat: StatDTO): Promise<StatModel> {
    return null;
  }
}
