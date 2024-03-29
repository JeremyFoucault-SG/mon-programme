import { Injectable, HttpException, HttpStatus, Query } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CoachingModel } from './coaching.model';
import { ModelType, InstanceType } from 'typegoose';
import { CoachingDTO } from './coaching.dto';
import { CoachingQuery } from './coachings.query';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';

@Injectable()
export class CoachingsService {
  constructor(@InjectModel(CoachingModel) private readonly coachingModel: ModelType<CoachingModel>) { }

  async findAll(): Promise<Array<InstanceType<CoachingModel>>> {
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

  async search(query: CoachingQuery): Promise<CoachingModel[]> {
    const pipe: any[] = [];
    if (query.categories) {
      pipe.push(
        {
          $match:
          {
            'categories.title': { $regex: `${Array.isArray(query.categories) ? query.categories.join('|') : query.categories}`, $options: 'i' },
          },
        });
    }
    if (query.rating) {
      pipe.push(
        {
          $match: { rating: { $gte: +query.rating, $lte: 5 } },
        },
        {
          $sort: { rating: -1 },
        },
      );
    }
    if (query.limit) {
      pipe.push(
        { $limit: +query.limit },
      );
    }
    if (query.skip) {
      pipe.push(
        { $skip: +query.skip },
      );
    }
    if (pipe.length > 0) {
      return this.coachingModel.aggregate(pipe).exec();
    } else {
      return this.coachingModel.find({}).exec();
    }
  }

 /**
  * Find one coaching by his ID
  * @param title ID of wanted coaching
  */

  async findByTitle(urlTitle: string): Promise<CoachingModel> {
    const coaching = await this.coachingModel.findOne({ urlTitle }).exec();
    if (!coaching) {
      throw new EntityException(EntityExceptionCode.NOT_FOUND);
    }
    return coaching;
  }

}
