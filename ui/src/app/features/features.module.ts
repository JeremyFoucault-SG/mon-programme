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
import { DashboardSuiviComponent } from './dashboard-suivi/dashboard-suivi.component';
import { DashboardStatistiqueComponent } from './dashboard-statistique/dashboard-statistique.component';
import { DashboardInfoCorporellesComponent } from './dashboard-suivi/dashboard-info-corporelles/dashboard-info-corporelles.component';
import { DashboardProgressBarComponent } from './dashboard-suivi/dashboard-progress-bar/dashboard-progress-bar.component';
import { DashboardGoalComponent } from './dashboard-suivi/dashboard-goal/dashboard-goal.component';
import { DashboardInfoSmComponent } from './dashboard-info-sm/dashboard-info-sm.component';
import { DashboardAvisComponent } from './dashboard-compte-sm/dashboard-avis/dashboard-avis.component';
import { DashboardProgrammeComponent } from './dashboard-compte-sm/dashboard-programme/dashboard-programme.component';
import { DashboardArticleComponent } from './dashboard-compte-sm/dashboard-article/dashboard-article.component';
import { NosProgrammeMobileComponent } from './nos-programme-mobile/nos-programme-mobile.component';
import { BlogMobileComponent } from './blog-mobile/blog-mobile.component';


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
    CommandeComponent,
    DashboardSuiviComponent,
    DashboardStatistiqueComponent,
    DashboardInfoCorporellesComponent,
    DashboardProgressBarComponent,
    DashboardGoalComponent,
    DashboardInfoSmComponent,
    DashboardAvisComponent,
    DashboardProgrammeComponent,
    DashboardArticleComponent,
    NosProgrammeMobileComponent,
    BlogMobileComponent

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
