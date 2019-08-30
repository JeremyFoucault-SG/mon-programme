import { NgxQuillModule } from '@dimpu/ngx-quill';
import { NgModule } from '@angular/core';
import { CreateArticleComponent } from './article/create-article/create-article.component';
// import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
declarations: [
    CreateArticleComponent
],

  imports: [
    NgxQuillModule,
    ReactiveFormsModule,
    // QuillModule
  ],
  exports: [],
})
export class AdminModule {}
