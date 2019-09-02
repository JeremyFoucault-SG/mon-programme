import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddArticle } from '../../../core/store/store.module/article/article.actions';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  articleForm: FormGroup;
  constructor(private store: Store) { }

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl(''),
      photoUrl: new FormControl(''),
      author: new FormControl(''),
      content: new FormControl(''),
    });
  }
  submit() {
    this.store.dispatch(new AddArticle(this.articleForm.value));
  }
}
