import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlog } from '../../../models/articles-blog.model';

@Component({
  selector: 'app-card-blog-sm',
  templateUrl: './card-blog-sm.component.html',
  styleUrls: ['./card-blog-sm.component.css']
})
export class CardBlogSmComponent implements OnInit {

  /**
   * Set photo, titre, desc in article-blog
   */
  @Input()
  public article: ArticleBlog;

  constructor() { }

  ngOnInit() {
  }

}
