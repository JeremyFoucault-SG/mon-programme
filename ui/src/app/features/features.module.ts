import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PopupAccueilComponent } from './popup-accueil/popup-accueil.component';
import { PopupMwComponent } from './popup-mw/popup-mw.component';
import { RouterModule } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PopupAccueilComponent,
    PopupMwComponent,
    HomeComponent,
    LoginModalComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
