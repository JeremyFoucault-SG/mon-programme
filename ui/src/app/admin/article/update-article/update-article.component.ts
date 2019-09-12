import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { isNgTemplate } from '@angular/compiler';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';
import {  UpdateArticle, AddArticle, SetSelectedArticle } from 'src/app/core/store/store.module/article/article.actions';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService) {
    this.createForm();
   }
  articleForm: FormGroup;
  editArticle = false;

  @Select(ArticleState.article)
  selectedArticle: Observable<ArticleBlog>;



  ngOnInit() {
    this.selectedArticle.subscribe(item => {
      if (item) {
        this.articleForm.patchValue({
          id: item._id,
          title: item.title,
          photoUrl: item.photoUrl,
          author: item.author,
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
        this.articleForm.reset();
        this.store.dispatch(new SetSelectedArticle(this.articleForm.value));
        this.showSuccessUpdate();
      });
    } else {
      this.store.dispatch(new AddArticle(this.articleForm.value)).subscribe(() => {
        this.articleForm.reset();
        this.showSuccesAdd()
      });
    }
  }

  clearForm() {
    this.articleForm.reset();
    this.store.dispatch(new SetSelectedArticle(this.articleForm.value));
    this.showSuccessUpdate();
  }

  showSuccesAdd(){
    this.toastr.success('Article ajouté');
  }

  showSuccessUpdate() {
    this.toastr.success('Article mis à jour.');
  }

  showError() {
    // tslint:disable-next-line: quotemark
    this.toastr.error("Impossible de mettre à jour l'article");
  }

}
