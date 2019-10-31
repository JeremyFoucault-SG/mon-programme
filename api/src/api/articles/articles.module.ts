import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ArticleModel } from './article.model';
import { UploadModule } from '../uplaod/upload.module';

@Module({
  imports: [
    UploadModule,
    TypegooseModule.forFeature(
      [{
        typegooseClass: ArticleModel,
        schemaOptions: {
          collection: 'articles',
        },
      }]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule { }
