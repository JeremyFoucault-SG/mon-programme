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
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { SettingsModel } from '../settings/settings.model';

@Controller('auth')
@ApiUseTags('Auth')
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
        const { username, password, age, email, firstname, lastname, goals, size, weight } = register;
        const auth: AuthDTO = { password, username };
        await this.authService.createAuth(register);
        const user = await this.userService.insert(new UserDTO());
        await this.authService.updateAuth(auth, user);
        await this.settingService.insert(user._id,
            {

                infos: {
                    age,
                    weight,
                    size,
                    goals,

            },
                contact: {
                    email,
                    firstname,
                    lastname,

                },
                paiement: {

                },
            });
    }

    @Get('users')
    @ApiBearerAuth()
    @ApiOperation({ title: 'Get auth all' })
    @ApiResponse({ status: 200, description: 'Return setting.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @UseGuards(AuthGuard('jwt'))
    async readAll(): Promise<AuthModel[]> {
        return this.authService.findAll();
    }

}
