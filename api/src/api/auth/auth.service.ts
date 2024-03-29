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
import { ConfigService } from '../../config/config.service';
import { Authentication } from './authentication';
import { RegisterDTO } from './register.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(AuthModel) private readonly authModel: ModelType<AuthModel>,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) { }

    async createToken(auth: AuthDTO): Promise<any> {
        const id = (auth.username as any) as string;
        const user = await this.authModel.findOne({ username: auth.username });
        const payload: JwtPayload = { username: auth.username, userId: user.user as unknown as string };
        const accessToken = this.jwtService.sign(payload, { expiresIn: +this.configService.get('JWT_EXPIRESIN'), subject: auth.username });
        return { token: accessToken };
    }

    async createAuth(register: RegisterDTO): Promise<Authentication> {
        const user = await this.authModel.findOne({ username: register.username });
        if (user) {
            throw new UnauthorizedException();
        }
        const model: Authentication = new this.authModel(register);
        return await model.save();
    }

    async updateAuth(auth: AuthDTO, user: InstanceType<UserModel>): Promise<AuthModel> {
        const authFinded = await this.authModel.findOne({ username: auth.username }).exec();
        if (!authFinded) {
            throw new UnauthorizedException();
        }
        return await authFinded.updateOne({ user: user.id }).exec();
    }

    async verifyAuth(username: string, password: string): Promise<AuthModel> {
        const userFinded = await this.authModel.findOne({ username }).exec();
        if (!userFinded || !userFinded.comparePassword(password)) {
            throw new UnauthorizedException();
        }
        return userFinded;
    }

    async findAll(): Promise<AuthModel[]> {
        return this.authModel.find({}).exec();
    }
}
