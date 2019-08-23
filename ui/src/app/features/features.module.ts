import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PopupAccueilComponent } from './popup-accueil/popup-accueil.component';
import { PopupMwComponent } from './popup-mw/popup-mw.component';
import { RouterModule } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SharedModule } from '../shared/shared.module';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ArticleBlogComponent } from './article-blog/article-blog.component';
import { NosProgrammesComponent } from './nos-programmes/nos-programmes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';
import { DashboardCompteSmComponent } from './dashboard-compte-sm/dashboard-compte-sm.component';
import { HomeHeaderMenuComponent } from './home/header/menu/home-header-menu.component';
import { HomeHeaderComponent } from './home/header/home-header.component';
import { HomeHeaderVideoComponent } from './home/header/video/home-header-video.component';


@NgModule({
  declarations: [
    PopupAccueilComponent,
    PopupMwComponent,
    HomeComponent,
    LoginModalComponent,
    NutritionComponent,
    ArticleBlogComponent,
    NosProgrammesComponent,
    DashboardCompteSmComponent,
    HomeHeaderMenuComponent,
    HomeHeaderComponent,
    HomeHeaderVideoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FacebookModule.forRoot()
  ],
  exports: [
    LoginModalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule { }
