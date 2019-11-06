import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlog } from '../../../shared/models/articles-blog.model';
import { Store } from '@ngxs/store';
import { AddWishArticle, DeleteWishByIdArticle } from 'src/app/core/store/store.module/wishe/wish.action';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  /**
   * Set photo, titre, content, etc in article-blog
   */
  @Input()
  public article: ArticleBlog;
  /**
   * Look is article is on the left or right side
   */
  @Input()
  public isReverse: boolean;

  @Input()
  public isFavorite: boolean;

  constructor(private store: Store, private toastr: ToastrService) {}

  ngOnInit() {}

  changeWishArticle(article: ArticleBlog, id: string) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.store.dispatch(new AddWishArticle({ wishId: article._id }));
      this.toastr.success('Article ajouté aux favoris avec succés !');
    } else {
      this.store.dispatch(new DeleteWishByIdArticle(id));
      this.toastr.warning('Article supprimé des favoris avec succés !');
    }
  }
}
