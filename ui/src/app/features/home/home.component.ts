import { Component, OnInit } from '@angular/core';
import { ProgramsList, ProgramDetail } from '../../shared/models/programs-infos';
import { HomeHeaderMenuComponent } from './header/menu/home-header-menu.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Store, Select } from '@ngxs/store';
import { ArticleState } from '../../core/store/store.module/article/article.state';
import {SearchArticle} from '../../core/store/store.module/article/article.actions';
import { Observable } from 'rxjs';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';
/**
 * Home component show cards of blog, programs and more
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: boolean;
  public selected: ProgramDetail;
  public programsInfos: ProgramDetail[] = ProgramsList.infos;
  public programs = [];
  public auth: AuthenticationService;

  @Select(ArticleState.articles )
  articles: Observable<ArticleBlog[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.selected = this.programsInfos[0];
    this.store.dispatch(new SearchArticle({date: '-1', limit: 2, categories: 'style-de-vie-et-nutrition'}));
  }

  onChange(programDetail: ProgramDetail, index) {
    this.selected = programDetail;
    console.log();
  }

}
