
import { Strategy, ExtractJwt } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthModel } from './auth.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<AuthModel> {
        const auth = await this.authService.verifyAuth(username, password);
        if (!auth) {
            throw new UnauthorizedException();
        }
        return auth;
    }
}
