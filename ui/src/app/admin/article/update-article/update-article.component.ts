import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { isNgTemplate } from '@angular/compiler';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';
import { GetByIdArticle, UpdateArticle, AddArticle, SetSelectedArticle } from 'src/app/core/store/store.module/article/article.actions';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  articleForm: FormGroup;
  editArticle = false;
  constructor(private store: Store, private route: ActivatedRoute) {
    this.createForm();
   }

  @Select(ArticleState.article)
  selectedArticle: Observable<ArticleBlog>;


  ngOnInit() {
    this.selectedArticle.subscribe(item => {
      if (item) {
        this.articleForm.patchValue({
          id: item._id,
          title: item.title,
          content: item.content
        });
        this.editArticle = true;
      } else {
        this.editArticle = false;
      }
    });

  }
  createForm() {
    this.articleForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      photoUrl: new FormControl(''),
      author: new FormControl(''),
      content: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.editArticle) {
      this.store.dispatch(new UpdateArticle(this.articleForm.value, this.articleForm.value.id)).subscribe(() => {
        this.clearForm();
      });
    } else {
      this.store.dispatch(new AddArticle(this.articleForm.value)).subscribe(() => {
        this.clearForm();
      });
    }
  }

  clearForm() {
    this.articleForm.reset();
    this.store.dispatch(new SetSelectedArticle(this.articleForm.value));
  }


}
