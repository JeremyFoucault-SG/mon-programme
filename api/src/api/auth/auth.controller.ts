import { Controller, HttpCode, HttpStatus, Post, Body, UseGuards, Req, Inject, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { SettingsService } from '../settings/settings.service';
import { SettingsDTO } from '../settings/settings.dto';
import { UsersService } from '../users/users.service';
import { UserDTO } from '../users/user.dto';
import { RegisterDTO } from './register.dto';
import { AuthModel } from './auth.model';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SettingsModel } from '../settings/settings.model';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly settingService: SettingsService,
        private readonly userService: UsersService,
    ) { }

    @UseGuards(AuthGuard('local'))
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signin(@Body() auth: AuthDTO): Promise<any> {
        return this.authService.createToken(auth);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    async signup(@Body() register: RegisterDTO) {
        const { username, password, ...settings } = register;
        const auth: AuthDTO = { password, username };
        await this.authService.createAuth(register);
        const user = await this.userService.insert(new UserDTO());
        const updatedAuth = await this.authService.updateAuth(auth, user);
        const setting = await this.settingService.insert(user._id,
            {
                infos: {
                    ...settings,
                    username,
                },
            });
    }

    @Get('users')
    @ApiBearerAuth()
    @ApiOperation({ title: 'Get auth all' })
    @ApiResponse({ status: 200, description: 'Return setting.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async readAll(): Promise<AuthModel[]> {
        return this.authService.findAll();
    }
}
