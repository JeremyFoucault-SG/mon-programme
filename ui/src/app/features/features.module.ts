import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PopupMwComponent } from './popup-mw/popup-mw.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticleBlogComponent } from './article-blog/article-blog.component';
import { NosProgrammesComponent } from './nos-programmes/nos-programmes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';
import { HomeHeaderMenuComponent } from './home/header/menu/home-header-menu.component';
import { HomeHeaderComponent } from './home/header/home-header.component';
import { HomeHeaderVideoComponent } from './home/header/video/home-header-video.component';
import { StatsComponent } from './dashboard-suivi/stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import { CommandeComponent } from './commande/commande.component';
import { DashboardSuiviComponent } from './dashboard-suivi/dashboard-suivi.component';
import { DashboardStatistiqueComponent } from './dashboard/dashboard-statistique/dashboard-statistique.component';
import { DashboardInfoCorporellesComponent } from './dashboard-suivi/dashboard-info-corporelles/dashboard-info-corporelles.component';
import { DashboardProgressBarComponent } from './dashboard-suivi/dashboard-progress-bar/dashboard-progress-bar.component';
import { DashboardGoalComponent } from './dashboard-suivi/dashboard-goal/dashboard-goal.component';
import { DashboardAvisComponent } from './dashboard/compte/dashboard-avis/dashboard-avis.component';
import { DashboardProgrammeComponent } from './dashboard/compte/dashboard-programme/dashboard-programme.component';
import { DashboardArticleComponent } from './dashboard/compte/dashboard-article/dashboard-article.component';
import { DashboardSuiviSmComponent } from './dashboard-suivi/dashboard-suivi-sm/dashboard-suivi-sm.component';
import { DashboardSuiviLgComponent } from './dashboard-suivi/dashboard-suivi-lg/dashboard-suivi-lg.component';
import { PratiqueSportiveMobileComponent } from './pratique-sportive-mobile/pratique-sportive-mobile';
import { BlogMobileComponent } from './blog-mobile/blog-mobile.component';
import { DashboardPaiementComponent } from './dashboard/info/dashboard-paiement/dashboard-paiement.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './blog/header/header.component';
import { InfoComponent } from './dashboard/info/info.component';
import { CompteComponent } from './dashboard/compte/compte.component';


@NgModule({
  declarations: [
    PopupMwComponent,
    HomeComponent,
    ArticleBlogComponent,
    NosProgrammesComponent,
    StatsComponent,
    HomeHeaderMenuComponent,
    HomeHeaderComponent,
    HomeHeaderVideoComponent,
    CommandeComponent,
    DashboardSuiviComponent,
    DashboardStatistiqueComponent,
    DashboardInfoCorporellesComponent,
    DashboardProgressBarComponent,
    DashboardGoalComponent,
    DashboardAvisComponent,
    DashboardProgrammeComponent,
    DashboardArticleComponent,
    DashboardSuiviSmComponent,
    DashboardSuiviLgComponent,
    DashboardPaiementComponent,
    PratiqueSportiveMobileComponent,
    BlogMobileComponent,
    BlogComponent,
    HeaderComponent,
    InfoComponent,
    CompteComponent,
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
