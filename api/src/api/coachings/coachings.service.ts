import { Injectable} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CoachingModel } from './coaching.model';
import { ModelType } from 'typegoose';
import { CoachingDTO } from './coaching.dto';

@Injectable()
export class CoachingsService {
    constructor(@InjectModel(CoachingModel) private readonly coachingModel: ModelType<CoachingModel>) {}




    async findAll(): Promise<CoachingModel[]> {
        return this.coachingModel.find({}).exec();
      }

      async findById(id: string): Promise<CoachingModel> {
        return this.coachingModel.findById(id).exec();
      }
    

      async insert(coaching: CoachingDTO): Promise<CoachingModel> {
        const createdCoaching = new this.coachingModel(coaching);
        return createdCoaching.save();
      }

}
