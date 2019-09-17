import { Controller, Get, Put, Body, Post, Param } from '@nestjs/common';
import { SettingsModel } from './settings.model';
import { SettingsDTO } from './settings.dto';
import { ApiResponse, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { SettingsService } from './settings.service';
import { User } from '../../decorators/user.decorator';
import { settings } from 'cluster';

@Controller('settings')
export class SettingsController {

    constructor(private readonly settingsService: SettingsService) {}

    @Get(':id')
    @ApiBearerAuth()
    @ApiOperation({ title: 'Get setting by ID' })
    @ApiResponse({ status: 200, description: 'Return setting.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async readOne(@Param('id') idUser: string): Promise<SettingsModel> {
      return this.settingsService.findById(idUser);
    }

    @Get()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Get setting all' })
    @ApiResponse({ status: 200, description: 'Return setting.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async readAll(): Promise<SettingsModel[]> {
        return this.settingsService.findAll();
    }

    @Put()
    async update(@User('id') idUser: string, @Body() setting: SettingsDTO): Promise<SettingsModel> {
        return null;
    }

}
