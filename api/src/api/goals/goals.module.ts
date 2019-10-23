import { Module } from '@nestjs/common';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { GoalModel } from './goal.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature(
    [{
      typegooseClass: GoalModel,
      schemaOptions: {
        collection: 'goals',
      },
    }],
  )],
  controllers: [GoalsController],
  providers: [GoalsService],
})
export class GoalsModule { }
