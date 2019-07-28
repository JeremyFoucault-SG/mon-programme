import { Controller, Get, Put, Body } from '@nestjs/common';
import { SettingsModel } from './settings.model';
import { SettingsDTO } from './settings.dto';

@Controller('settings')
export class SettingsController {

    @Get()
    async readOne(): Promise<SettingsModel> {
        return null;
    }

    @Put()
    async update(@Body() settings: SettingsDTO): Promise<SettingsModel> {
        return null;
    }
}
