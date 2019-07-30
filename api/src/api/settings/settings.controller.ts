import { Controller, Get, Put, Body } from '@nestjs/common';
import { SettingsModel } from './settings.model';
import { SettingsDTO } from './settings.dto';
import { ApiResponse, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { SettingsService } from './settings.service';
import { User } from '../../decorators/user.decorator';

@Controller('settings')
export class SettingsController {

    constructor(private readonly settingsService: SettingsService) {}

    @Get()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Get settings for current authenticated user' })
    @ApiResponse({ status: 200, description: 'Return settings.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async readOne(@User('id') idUser: string): Promise<SettingsModel> {
        return this.settingsService.find(idUser);
    }

    @Put()
    async update(@User('id') idUser: string, @Body() settings: SettingsDTO): Promise<SettingsModel> {
        return null;
    }
}
