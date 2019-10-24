import { Module } from '@nestjs/common';
import { CoachingsController } from './coachings.controller';
import { CoachingsService } from './coachings.service';
import { CoachingModel } from './coaching.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forFeature(
      [{
        typegooseClass: CoachingModel,
        schemaOptions: {
          collection: 'coachings',
        },
      }]),
  ],
  controllers: [CoachingsController],
  providers: [CoachingsService],
  exports: [CoachingsService],
})
export class CoachingsModule { }
