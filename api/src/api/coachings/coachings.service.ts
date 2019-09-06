import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CoachingModel } from './coaching.model';
import { ModelType } from 'typegoose';
import { CoachingDTO } from './coaching.dto';

@Injectable()
export class CoachingsService {
  constructor(@InjectModel(CoachingModel) private readonly coachingModel: ModelType<CoachingModel>) { }

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

  async update(id: string, coachingDTO: CoachingDTO) {
    const coaching = await this.coachingModel.findByIdAndUpdate(id, coachingDTO, {
      new: true,
    });
    if (!coaching) {
      throw new HttpException('Does not exist', HttpStatus.NOT_FOUND);
    }
    return coaching;
  }

  async delete(id: string): Promise<CoachingModel> {
    const coaching = await this.coachingModel.findByIdAndRemove(id);
    if (!coaching) {
      throw new HttpException('Does not exist', HttpStatus.NOT_FOUND);
    }
    return coaching;
  }

}
