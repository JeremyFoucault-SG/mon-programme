import { Module } from '@nestjs/common';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { UsersModule } from '../users/users.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { StatModel } from './stat.model';

@Module({
  imports: [
    TypegooseModule.forFeature(
      [{
        typegooseClass: StatModel,
        schemaOptions: {
          collection: 'stats',
        },
      }]),
    UsersModule,
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule { }
