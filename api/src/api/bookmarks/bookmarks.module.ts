import { Module } from '@nestjs/common';
import { BookmarksController } from './bookmarks.controller';
import { BookmarksService } from './bookmarks.service';
import { UsersModule } from '../users/users.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { BookmarkModel } from './bookmark.model';

@Module({
  imports: [
    TypegooseModule.forFeature(
      [{
        typegooseClass: BookmarkModel,
        schemaOptions: {
          collection: 'bookmarks',
        },
      }]),
    UsersModule,
  ],
  controllers: [BookmarksController],
  providers: [BookmarksService],
})
export class BookmarksModule { }
