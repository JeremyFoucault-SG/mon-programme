import { Controller, HttpCode, HttpStatus, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { UserDTO } from '../users/user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) { }

    @UseGuards(AuthGuard('local'))
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signin(@Req() req): Promise<any> {
        return this.authService.createToken(req.user);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    async signup(@Body() auth: AuthDTO): Promise<any> {
        await this.authService.createAuth(auth);
        const user = await this.usersService.createUser(new UserDTO());
        await this.authService.updateAuth(auth, user);
        return;
    }
}
