import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthModel } from './auth.model';
import { ModelType } from 'typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { AuthDTO } from './auth.dto';
import { JwtPayload } from './jwt-payload';
import { UserModel } from '../users/user.model';
import { InstanceType } from 'typegoose';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(AuthModel) private readonly authModel: ModelType<AuthModel>,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService) { }

    async createToken(auth: AuthModel): Promise<any> {
        const id = (auth.user as any) as string;

        const payload: JwtPayload = { username: auth.username };
        const accessToken = this.jwtService.sign(payload, { expiresIn: this.configService.get('JWT_EXPIRESIN'), subject: auth.username });
        return {token: accessToken};
    }

    async createAuth(auth: AuthDTO): Promise<AuthModel> {
        const authFinded = await this.authModel.findOne({username: auth.username}).exec();
        if (authFinded) {
            throw new UnauthorizedException();
        }
        const authCreated = new this.authModel(auth);
        return authCreated.save();
    }

    async updateAuth(auth: AuthDTO, user: InstanceType<UserModel>): Promise<AuthModel> {
        const authFinded = await this.authModel.findOne({username: auth.username}).exec();

        if (!authFinded) {
            throw new UnauthorizedException();
        }
        return await authFinded.updateOne({user: user.id}).exec();
    }

    async verifyAuth(username: string, password: string): Promise<AuthModel> {
        const userFinded = await this.authModel.findOne({username}).exec();
        if (!userFinded || userFinded.password !== password) {
            throw new UnauthorizedException();
        }
        return userFinded;
    }
}
