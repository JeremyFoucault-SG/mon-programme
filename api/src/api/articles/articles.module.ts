import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ArticleModel } from './article.model';

@Module({
  imports: [
    TypegooseModule.forFeature([ArticleModel]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
