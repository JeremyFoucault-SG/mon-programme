import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PopupAccueilComponent } from './popup-accueil/popup-accueil.component';
import { PopupMwComponent } from './popup-mw/popup-mw.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ArticleBlogComponent } from './article-blog/article-blog.component';
import { NosProgrammesComponent } from './nos-programmes/nos-programmes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';
import { HomeHeaderMenuComponent } from './home/header/menu/home-header-menu.component';
import { HomeHeaderComponent } from './home/header/home-header.component';
import { HomeHeaderVideoComponent } from './home/header/video/home-header-video.component';
import { StatsComponent } from './dashboard-suivi/stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardCompteSmComponent } from './dashboard-compte/dashboard-compte-sm/dashboard-compte-sm.component';
import { CommandeComponent } from './commande/commande.component';
import { DashboardSuiviComponent } from './dashboard-suivi/dashboard-suivi.component';
import { DashboardStatistiqueComponent } from './dashboard-suivi/dashboard-statistique/dashboard-statistique.component';
import { DashboardInfoCorporellesComponent } from './dashboard-suivi/dashboard-info-corporelles/dashboard-info-corporelles.component';
import { DashboardProgressBarComponent } from './dashboard-suivi/dashboard-progress-bar/dashboard-progress-bar.component';
import { DashboardGoalComponent } from './dashboard-suivi/dashboard-goal/dashboard-goal.component';
import { DashboardInfoSmComponent } from './dashboard-infos-personnelles/dashboard-info-sm/dashboard-info-sm.component';
import { DashboardAvisComponent } from './dashboard-compte/dashboard-avis/dashboard-avis.component';
import { DashboardProgrammeComponent } from './dashboard-compte/dashboard-programme/dashboard-programme.component';
import { DashboardArticleComponent } from './dashboard-compte/dashboard-article/dashboard-article.component';
import { DashboardInfosPersonnellesComponent } from './dashboard-infos-personnelles/dashboard-infos-personnelles.component';
import { DashboardSuiviSmComponent } from './dashboard-suivi/dashboard-suivi-sm/dashboard-suivi-sm.component';
import { DashboardCompteComponent } from './dashboard-compte/dashboard-compte.component';
import { DashboardCompteLgComponent } from './dashboard-compte/dashboard-compte-lg/dashboard-compte-lg.component';
import { DashboardInfoLgComponent } from './dashboard-infos-personnelles/dashboard-info-lg/dashboard-info-lg.component';
import { DashboardSuiviLgComponent } from './dashboard-suivi/dashboard-suivi-lg/dashboard-suivi-lg.component';
import { PratiqueSportiveMobileComponent } from './pratique-sportive-mobile/pratique-sportive-mobile';
import { BlogMobileComponent } from './blog-mobile/blog-mobile.component';
import { DashboardPaiementComponent } from './dashboard-infos-personnelles/dashboard-paiement/dashboard-paiement.component';


@NgModule({
  declarations: [
    PopupAccueilComponent,
    PopupMwComponent,
    HomeComponent,
    NutritionComponent,
    ArticleBlogComponent,
    NosProgrammesComponent,
    StatsComponent,
    DashboardCompteSmComponent,
    HomeHeaderMenuComponent,
    HomeHeaderComponent,
    HomeHeaderVideoComponent,
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
    DashboardInfosPersonnellesComponent,
    DashboardSuiviSmComponent,
    DashboardCompteComponent,
    DashboardCompteLgComponent,
    DashboardInfoLgComponent,
    DashboardSuiviLgComponent,
    DashboardPaiementComponent,
    PratiqueSportiveMobileComponent,
    BlogMobileComponent,
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
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule { }
