import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoryModel } from './category.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([CategoryModel])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
