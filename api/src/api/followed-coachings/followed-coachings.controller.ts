import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { FollowedCoachingModel } from './followed-coaching.model';
import { FollowedCoachingDTO } from './followed-coachings.dto';
import { FollowedCoachingsService } from './followed-coachings.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { User } from '../../decorators/user.decorator';

@Controller('followed-coachings')
@ApiUseTags('Followed-coachings')
export class FollowedCoachingsController {

  constructor(private readonly followedCoachingsService: FollowedCoachingsService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new followed coaching for current authenticated user' })
  @ApiResponse({ status: 201, description: 'Return followed coaching.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@User('id') idUser: string,  @Body() coaching: FollowedCoachingDTO): Promise<FollowedCoachingModel> {
    return this.followedCoachingsService.insert(idUser, coaching);
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get followed coaching by ID of current authenticated user' })
  @ApiResponse({ status: 200, description: 'Return followed coaching.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async readOne(@User('id') idUser: string, @Param('id') idCoaching: string): Promise<FollowedCoachingModel> {
    return this.followedCoachingsService.findById(idUser, idCoaching);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get all bodies of current authenticated user' })
  @ApiResponse({ status: 200, description: 'Return an array of bodies.' })
  async readAll(@User('id') idUser: string): Promise<FollowedCoachingModel[]> {
    return this.followedCoachingsService.findAll(idUser);
  }

  @Put(':id')
  async update(@User('id') idUser: string, @Param('id') idCoaching: string, @Body() coaching: FollowedCoachingDTO): Promise<FollowedCoachingModel> {
    return null;
  }
}
