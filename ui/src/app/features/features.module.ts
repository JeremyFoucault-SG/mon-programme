import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-container/home.component';
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
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import { InfosComponent } from './infos/infos.component';
import { DashboardCompteSmComponent } from './dashboard-compte-sm/dashboard-compte-sm.component';
import { CommandeComponent } from './commande/commande.component';


@NgModule({
  declarations: [
    PopupAccueilComponent,
    PopupMwComponent,
    HomeComponent,
    LoginModalComponent,
    NutritionComponent,
    ArticleBlogComponent,
    NosProgrammesComponent,
    StatsComponent,
    InfosComponent,
    DashboardCompteSmComponent,
    CommandeComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FacebookModule.forRoot(),
    ChartsModule
  ],
  exports: [
    LoginModalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule { }
