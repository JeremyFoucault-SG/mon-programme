import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlog } from '../../../models/articles-blog.model';

@Component({
  selector: 'app-card-blog-lg',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent implements OnInit {

  /**
   * Set photo, titre, desc in article-blog
   */
  @Input()
  public articlesBlog: ArticleBlog;
  /**
   * Look is the articles is even or odd
   */
  @Input()
  public isReverse: boolean;

  constructor() { }

  ngOnInit() {
  }

}
