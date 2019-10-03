import { Module } from '@nestjs/common';
import { BodiesController } from './bodies.controller';
import { BodiesService } from './bodies.service';
import { UsersModule } from '../users/users.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { BodyModel } from './body.model';

@Module({
  imports: [
    TypegooseModule.forFeature([BodyModel]),
    UsersModule,
  ],
  controllers: [BodiesController],
  providers: [BodiesService],
})
export class BodiesModule {}
