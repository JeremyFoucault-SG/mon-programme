import { Injectable } from '@nestjs/common';
import { CategoryModel } from './category.model';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType, InstanceType } from 'typegoose';
import { CategoryDTO } from './category.dto';
@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel('CategoryModel') private readonly categoryModel: ModelType<CategoryModel>) { }

    async findAll(): Promise<Array<InstanceType<CategoryModel>>> {
        return this.categoryModel.find({}).exec();
    }
    /**
     *
     * @param id
     */
    async findById(id: string): Promise<CategoryModel> {
        return this.categoryModel.findById(id).exec();
    }
    /**
     *
     * @param categories
     */
    async insert(categories: CategoryDTO): Promise<CategoryModel> {
        const createdCategory = new this.categoryModel(categories);
        return createdCategory.save();
    }
}
