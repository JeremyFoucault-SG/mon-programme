import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-blog',
  templateUrl: './article-blog.component.html',
  styleUrls: ['./article-blog.component.css']
})
export class ArticleBlogComponent implements OnInit {


  @Input()
  tag: string;


  constructor() { }

  ngOnInit() {
  }

}
