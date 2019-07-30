import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { BodyModel } from './body.model';
import { BodyDTO } from './body.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '../../decorators/user.decorator';
import { BodiesService } from './bodies.service';

@Controller('bodies')
export class BodiesController {

  constructor(private readonly bodiesService: BodiesService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new body for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return body.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@User('id') idUser: string,  @Body() body: BodyDTO): Promise<BodyModel> {
    return this.bodiesService.insert(idUser, body);
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get body by ID of current authenticated user' })
  @ApiResponse({ status: 200, description: 'Return body.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async readOne(@User('id') idUser: string, @Param('id') idBody: string): Promise<BodyModel> {
    return this.bodiesService.findById(idUser, idBody);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get all bodies of current authenticated user' })
  @ApiResponse({ status: 200, description: 'Return an array of bodies.' })
  async readAll(@User('id') idUser: string): Promise<BodyModel[]> {
    return this.bodiesService.findAll(idUser);
  }

  @Put(':id')
  async update(@User('id') idUser: string, @Param('id') idBody: string, @Body() body: BodyDTO): Promise<BodyModel> {
    return null;
  }
}
