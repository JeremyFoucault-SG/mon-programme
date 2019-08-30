import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '../core/store/store.module'
@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    StoreModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
