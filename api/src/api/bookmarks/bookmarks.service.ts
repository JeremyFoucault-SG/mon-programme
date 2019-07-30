import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ModelType } from 'typegoose';
import { InstanceType } from 'typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { EntityException, EntityExceptionCode } from '../../exceptions/entity-exception';
import { BookmarkModel } from './bookmark.model';
import { BookmarkDTO } from './bookmark.dto';

/**
 * Service for manage bookmarks save in database, for a given user
 */
@Injectable()
export class BookmarksService {

  constructor(
    private usersService: UsersService,
    @InjectModel(BookmarkModel) private readonly bookmarkModel: ModelType<BookmarkModel>,
  ) { }

  /**
   * Create new bookmark for given a user ID
   * @param idUser ID of user
   * @param bookmar Bookmark to insert
   */
  async insert(idUser: string, bookmark: BookmarkDTO): Promise<InstanceType<BookmarkModel>> {
    const user = await this.usersService.findById(idUser);
    const createdBookmark = new this.bookmarkModel(bookmark);
    user.bookmarks.push(createdBookmark);
    await user.save();
    return user.bookmarks[user.bookmarks.length - 1];
  }

  /**
   * Find all bookmarks present for a given user ID
   * @param idUser ID of user
   */
  async findAll(idUser: string): Promise<BookmarkModel[]> {
    const user = await this.usersService.findById(idUser);
    return user.bookmarks;
  }
}
