import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { GoalModel } from './goal.model';
import { GoalDTO } from './goal.dto';
@Injectable()
export class GoalsService {
    constructor(@InjectModel('GoalModel') private readonly goalModel: ModelType<GoalModel>) { }

    async findAll(): Promise<GoalModel[]> {
        return this.goalModel.find({}).exec();
    }
    /**
     *
     * @param id
     */
    async findById(id: string): Promise<GoalModel> {
        return this.goalModel.findById(id).exec();
    }
    /**
     *
     * @param cover
     */
    async insert(cover: GoalDTO): Promise<GoalModel> {
        const createdGoal = new this.goalModel(cover);
        return createdGoal.save();
    }
}
