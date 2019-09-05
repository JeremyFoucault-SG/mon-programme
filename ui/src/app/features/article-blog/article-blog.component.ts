import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { GetByIdArticle } from '../../core/store/store.module/article/article.actions';
import { ProgramDetail, ProgramsList } from 'src/app/shared/models/programs-infos';

@Component({
  selector: 'app-article-blog',
  templateUrl: './article-blog.component.html',
  styleUrls: ['./article-blog.component.css']
})
export class ArticleBlogComponent implements OnInit {


public selected: ProgramDetail;
public programsInfos: ProgramDetail[] = ProgramsList.infos;
public programs = [];


  @Input()
  tag: string;


  @Select(ArticleState.articles)
  articles: Observable<any>;


  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetByIdArticle('5d70dfdf42a76f14bf21d70d'));
    this.selected = this.programsInfos[0];

    this.programs = [
      {
        title: 'Program 1',
        content: 'content 1',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
      {
        title: 'Program 2',
        content: 'content 2',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
      {
        title: 'Program 3',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
      {
        title: 'Program 4',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
    ];
  }

  onChange(programDetail: ProgramDetail, index) {
    this.selected = programDetail;
    console.log();
  }


}


