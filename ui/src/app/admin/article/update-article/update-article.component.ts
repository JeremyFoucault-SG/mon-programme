import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
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
}
