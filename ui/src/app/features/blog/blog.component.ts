import { Component, OnInit } from '@angular/core';
import { ArticleBlog } from '../../shared/models/articles-blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public articlesBlog = [
    new ArticleBlog('','https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // tslint:disable-next-line: max-line-length
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
    new ArticleBlog('','https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // tslint:disable-next-line: max-line-length
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  new ArticleBlog('','https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // tslint:disable-next-line: max-line-length
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
    new ArticleBlog('','https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // tslint:disable-next-line: max-line-length
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  new ArticleBlog('','https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // tslint:disable-next-line: max-line-length
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
    new ArticleBlog('','https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // tslint:disable-next-line: max-line-length
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  new ArticleBlog('','https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // tslint:disable-next-line: max-line-length
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
    new ArticleBlog('','https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // tslint:disable-next-line: max-line-length
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  ];

}
