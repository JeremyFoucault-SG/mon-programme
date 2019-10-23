import {
  Controller,
  Get,
  Put,
  Body,
  Post,
  Param,
  UseGuards,
} from '@nestjs/common';
import { SettingsModel } from './settings.model';
import { SettingsDTO } from './settings.dto';
import {
  ApiResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiUseTags,
} from '@nestjs/swagger';
import { SettingsService } from './settings.service';
import { User, UserJWTPayload } from '../../decorators/user.decorator';
import { settings } from 'cluster';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { UserModel } from '../users/user.model';

@Controller('settings')
@ApiUseTags('Settings')
export class SettingsController {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly userService: UsersService,
  ) {}

  // @Get()
  // @ApiBearerAuth()
  // @ApiOperation({ title: 'Get setting all' })
  // @ApiResponse({ status: 200, description: 'Return setting.' })
  // @ApiResponse({ status: 404, description: 'Not Found.' })
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  // async readAll(): Promise<SettingsModel[]> {
  //   return this.settingsService.findAll();
  // }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ title: 'Get setting by ID' })
  @ApiResponse({ status: 200, description: 'Return setting.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async readOne(@User() user: UserJWTPayload): Promise<SettingsModel> {
    return this.settingsService.find(user.userId);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  async update(
    @User() user: UserJWTPayload,
    @Body() setting: SettingsDTO,
  ): Promise<SettingsModel> {
    return this.settingsService.update(user.userId, setting);
  }
}
