import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CoverModel } from './cover.model';
import { ModelType } from 'typegoose';
import { CoverDTO } from './cover.dto';

@Injectable()
export class CoversService {

    constructor(@InjectModel(CoverModel) private readonly coverModel: ModelType<CoverModel>) { }

    async findAll(): Promise<CoverModel[]> {
        return this.coverModel.find({}).exec();
      }
      async findById(id: string): Promise<CoverModel> {
        return this.coverModel.findById(id).exec();
      }
      async insert(cover: CoverDTO): Promise<CoverModel> {
        const createdCover = new this.coverModel(cover);
        return createdCover.save();
      }
}
