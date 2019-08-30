import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  articleForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl(''),
      photoUrl: new FormControl(''),
      author: new FormControl(''),
      content: new FormControl(''),
    })
  }
  submit(){
    console.log(this.articleForm.value);
  }
}
