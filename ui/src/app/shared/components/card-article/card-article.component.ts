import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlog } from '../../../shared/models/articles-blog.model';
import { Store, Select} from '@ngxs/store';
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

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
