import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';

@Component({
  selector: 'app-title-article',
  templateUrl: './title-article.component.html',
  styleUrls: ['./title-article.component.css']
})
export class TitleArticleComponent implements OnInit {

  @Input()
  public article: ArticleBlog;
  public isFavorite: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addFavorite(){
    this.isFavorite = !this.isFavorite;

  }
}
