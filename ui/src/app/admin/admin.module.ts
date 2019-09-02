import { NgxQuillModule } from '@dimpu/ngx-quill';
import { NgModule } from '@angular/core';
import { CreateArticleComponent } from './article/create-article/create-article.component';
// import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';

@NgModule({
declarations: [
    CreateArticleComponent,
    DeleteArticleComponent
],

  imports: [
    NgxQuillModule,
    ReactiveFormsModule,
    // QuillModule
  ],
  exports: [
    DeleteArticleComponent
  ],
})
export class AdminModule {}
