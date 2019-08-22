import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



// Component
import { FormCustomizeProgrammeComponent } from './components/form-customize-programme/form-customize-programme.component';
// tslint:disable-next-line: max-line-length
import { FormSelectionProgrammeComponent } from './components/selection-programme/form-selection-programme/form-selection-programme.component';
import { CardProgrammesComponent } from './components/card-programmes/card-programmes.component';
import { CardBlogComponent } from './components/list-blog/card-blog-lg/card-blog.component';
import { MenuComponent } from './components/menu/menu.component';
import { JoinTeamCodePromoComponent } from './components/join-team-code-promo/join-team-code-promo.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CardThumbProgramComponent } from './components/card-thumb-program/card-thumb-program.component';
import { CardMinArticleComponent } from './components/card-min-article/card-min-article.component';
import { CardNosProgrammesComponent } from './components/card-nos-programmes/card-nos-programmes.component';
import { MenuNosProgrammeComponent } from './components/menu-nos-programme/menu-nos-programme.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { CardBlogSmComponent } from './components/list-blog/card-blog-sm/card-blog-sm.component';
import { NewsletterSmComponent } from './components/newsletter/newsletter-sm/newsletter-sm.component';
import { NewsletterLgComponent } from './components/newsletter/newsletter-lg/newsletter-lg.component';
import { NewsletterBannerLgComponent } from './components/newsletter/newsletter-banner-lg/newsletter-banner-lg.component';
import { FunctionComponent } from './components/form-function/function/function.component';
// tslint:disable-next-line: max-line-length
import { FormSelectionProgrammeSmComponent } from './components/selection-programme/form-selection-programme-sm/form-selection-programme-sm.component';
import { ContactLgComponent } from './components/contact-lg/contact-lg.component';
import { FunctionSmComponent } from './components/form-function/function-sm/function-sm.component';
import { ObjectifProgrammeComponent } from './components/menu-nos-programme/objectif-programme/objectif-programme.component';
import { ContactSmComponent } from './components/contact-sm/contact-sm.component';
import { DetailProgrammeComponent } from './components/detail-programme/detail-programme.component';
import { DetailProgrammePhotoComponent } from './components/detail-programme/detail-programme-photo/detail-programme-photo.component';
import { LoginAccueilComponent } from './components/login-sm/login-accueil/login-accueil.component';
import { Inscription1Component } from './components/login-sm/inscription1/inscription1.component';
import { Inscription2Component } from './components/login-sm/inscription2/inscription2.component';
import { Inscription3Component } from './components/login-sm/inscription3/inscription3.component';
import { Inscription4Component } from './components/login-sm/inscription4/inscription4.component';
import { ConnexionComponent } from './components/login-sm/connexion/connexion.component';
import { DashboardInfoPersoComponent } from './components/dashboard-sm/dashboard-info-perso/dashboard-info-perso.component';
import { DashboardInfoFacturationComponent } from './components/dashboard-sm/dashboard-info-facturation/dashboard-info-facturation.component';
import { DashboardPaiementComponent } from './components/dashboard-sm/dashboard-paiement/dashboard-paiement.component';
import { DashboardHistoriqueComponent } from './components/dashboard-sm/dashboard-historique/dashboard-historique.component';



@NgModule({
  declarations: [
    FormCustomizeProgrammeComponent,
    FormSelectionProgrammeComponent,
    CardProgrammesComponent,
    CardBlogComponent,
    MenuComponent,
    JoinTeamCodePromoComponent,
    FooterHomeComponent,
    NewsletterComponent,
    FooterComponent,
    CardHomeComponent,
    CardMinArticleComponent,
    CardNosProgrammesComponent,
    CardThumbProgramComponent,
    MenuNosProgrammeComponent,
    ListBlogComponent,
    CardBlogSmComponent,
    NewsletterSmComponent,
    NewsletterLgComponent,
    NewsletterBannerLgComponent,
    FunctionComponent,
    FormSelectionProgrammeSmComponent,
    ContactLgComponent,
    FunctionSmComponent,
    ObjectifProgrammeComponent,
    ContactSmComponent,
    DetailProgrammeComponent,
    DetailProgrammePhotoComponent,
    LoginAccueilComponent,
    Inscription1Component,
    Inscription2Component,
    Inscription3Component,
    Inscription4Component,
    ConnexionComponent,
    DashboardInfoPersoComponent,
    DashboardInfoFacturationComponent,
    DashboardPaiementComponent,
    DashboardHistoriqueComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule


  ],
  exports: [
    FormCustomizeProgrammeComponent,
    FormSelectionProgrammeComponent,
    CardProgrammesComponent,
    CardBlogComponent,
    MenuComponent,
    JoinTeamCodePromoComponent,
    FooterHomeComponent,
    NewsletterComponent,
    FooterComponent,
    CardHomeComponent,
    CardThumbProgramComponent,
    CardMinArticleComponent,
    CardNosProgrammesComponent,
    MenuNosProgrammeComponent,
    FunctionComponent,
    ContactLgComponent,
    ListBlogComponent,
    FunctionSmComponent,
    FormSelectionProgrammeSmComponent,
    ObjectifProgrammeComponent,
    DashboardInfoPersoComponent,
    DashboardInfoFacturationComponent,
    DashboardPaiementComponent,
    DashboardHistoriqueComponent
  ]
})
export class SharedModule { }
