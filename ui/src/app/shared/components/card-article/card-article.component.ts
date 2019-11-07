import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlog } from '../../../shared/models/articles-blog.model';
import { Store, Select } from '@ngxs/store';
import { FirstCharacterePipe } from '../../pipes/firstCharactere.pipe';
import { VirtualTimeScheduler, Observable } from 'rxjs';
import {
  AddWishCoaching,
  AddWishArticle,
  DeleteWishArticle,
  DeleteWishByIdArticle
} from 'src/app/core/store/store.module/wishe/wish.action';
import { ToastrService } from 'ngx-toastr';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Wish } from '../../models/wishes.model';
import { filter, take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ModalService } from '../modal/modal.service';
import { ConnexionComponent } from 'src/app/features/connexion/connexion.component';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {
  /**
   * Set photo, titre, desc in article-blog
   */
  @Input()
  public article: ArticleBlog;
  /**
   * Look is the articles is even or odd
   */
  @Input()
  public isReverse: boolean;

  @Input()
  public isFavorite: boolean;

  constructor(
    private store: Store,
    private toastr: ToastrService,
    private authService: AuthenticationService,
    private modalService: ModalService
  ) {}

  ngOnInit() {}

  changeWishArticle(article: ArticleBlog, id: string) {
    this.authService.isLogin().pipe(take(1)).subscribe(res => {
      if (res) {
        this.isFavorite = !this.isFavorite;
        if (this.isFavorite) {
          this.store.dispatch(new AddWishArticle({ wishId: article._id }));
          this.toastr.success('Article ajouté aux favoris avec succés !');
        } else {
          this.store.dispatch(new DeleteWishByIdArticle(id));
          this.toastr.warning('Article supprimé des favoris avec succés !');
        }
      } else {
        this.modalService.init(ConnexionComponent, {}, {});
      }
    });
  }
}
