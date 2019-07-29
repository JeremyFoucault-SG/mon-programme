import { Injectable } from '@nestjs/common';
import { CategoryModel } from './category.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModelType } from 'typegoose';
import { CategoryDTO } from './category.dto';
@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel('CategoryModel') private readonly categories: ModelType<CategoryModel>) { }

    async findAll(): Promise<CategoryModel[]> {
        return this.categories.find();
    }

    async insert(categories: CategoryDTO): Promise<CategoryModel> {
        const createdCategory = new this.categories(categories);
        return createdCategory.save();
    }
}
