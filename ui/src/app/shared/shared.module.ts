import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormCustomizeProgrammeComponent } from './components/form-customize-programme/form-customize-programme.component';
// tslint:disable-next-line: max-line-length
import { FormSelectionProgrammeComponent } from './components/selection-programme/form-selection-programme/form-selection-programme.component';
import { CardProgrammesComponent } from './components/card-programmes/card-programmes.component';
import { CardArticleComponent } from './components/card-article/card-article.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CardThumbProgramComponent } from './components/card-thumb-program/card-thumb-program.component';
import { CardMinArticleComponent } from './components/card-min-article/card-min-article.component';
import { CardNosProgrammesComponent } from './components/card-nos-programmes/card-nos-programmes.component';
import { MenuNosProgrammeComponent } from './components/menu-nos-programme/menu-nos-programme.component';
import { NewsletterBannerComponent } from './components/newsletter/newsletter-banner/newsletter-banner.component';
import { FunctionComponent } from './components/form-function/function/function.component';
// tslint:disable-next-line: max-line-length
import { FormSelectionProgrammeSmComponent } from './components/selection-programme/form-selection-programme-sm/form-selection-programme-sm.component';
import { ContactComponent } from './components/contact/contact.component';
import { FunctionSmComponent } from './components/form-function/function-sm/function-sm.component';
import { ObjectifProgrammeComponent } from './components/menu-nos-programme/objectif-programme/objectif-programme.component';
import { DetailProgrammeComponent } from './components/detail-programme/detail-programme.component';
import { DetailProgrammePhotoComponent } from './components/detail-programme/detail-programme-photo/detail-programme-photo.component';
import { DashboardInfoPersoComponent } from '../features/dashboard/info/dashboard-info-perso/dashboard-info-perso.component';
// tslint:disable-next-line: max-line-length
import { TitleComponent } from './components/title/title.component';
import { CardThumbListComponent } from './components/card-thumb-list/card-thumb-list.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
// tslint:disable-next-line: max-line-length
import { DashboardInfoFacturationComponent } from '../features/dashboard/info/dashboard-info-facturation/dashboard-info-facturation.component';
import { DashboardHistoriqueComponent } from '../features/dashboard/info/dashboard-historique/dashboard-historique.component';
import { TagComponent } from './components/tag/tag.component';
import { FooterSmComponent } from './components/footer-sm/footer-sm.component';
import { GroupTitleComponent } from './components/group-title/group-title.component';
import { AdminModule } from '../admin/admin.module';
import { FirstCharacterePipe } from './pipes/firstCharactere.pipe';
import { SumPipe } from './pipes/sum.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { ConnexionModalComponent } from './components/connexion-modal/connexion-modal.component';
import { ConnexionModal2Component } from './components/connexion-modal2/connexion-modal2.component';


@NgModule({
  declarations: [
    FormCustomizeProgrammeComponent,
    FormSelectionProgrammeComponent,
    CardProgrammesComponent,
    CardArticleComponent,
    NewsletterComponent,
    FooterComponent,
    CardHomeComponent,
    CardMinArticleComponent,
    CardNosProgrammesComponent,
    CardThumbProgramComponent,
    MenuNosProgrammeComponent,
    NewsletterComponent,
    NewsletterBannerComponent,
    FunctionComponent,
    FormSelectionProgrammeSmComponent,
    ContactComponent,
    FunctionSmComponent,
    ObjectifProgrammeComponent,
    DetailProgrammeComponent,
    DetailProgrammePhotoComponent,
    DashboardInfoPersoComponent,
    DashboardInfoFacturationComponent,
    DashboardHistoriqueComponent,
    TitleComponent,
    CardThumbListComponent,
    SubTitleComponent,
    TagComponent,
    FooterSmComponent,
    GroupTitleComponent,
    FirstCharacterePipe,
    SumPipe,
    ModalComponent,
    ConnexionModalComponent,
    ConnexionModal2Component,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AdminModule,
  ],
  exports: [
    FormCustomizeProgrammeComponent,
    FormSelectionProgrammeComponent,
    CardProgrammesComponent,
    CardArticleComponent,
    NewsletterComponent,
    FooterComponent,
    CardHomeComponent,
    CardThumbProgramComponent,
    CardMinArticleComponent,
    CardNosProgrammesComponent,
    MenuNosProgrammeComponent,
    FunctionComponent,
    ContactComponent,
    FunctionSmComponent,
    FormSelectionProgrammeSmComponent,
    ObjectifProgrammeComponent,
    DashboardInfoPersoComponent,
    DashboardInfoFacturationComponent,
    DashboardHistoriqueComponent,
    TitleComponent,
    CardThumbListComponent,
    SubTitleComponent,
    TagComponent,
    FooterSmComponent,
    GroupTitleComponent,
    FirstCharacterePipe,
    SumPipe
  ],
  entryComponents : [
    ConnexionModalComponent,
    ConnexionModal2Component,
  ]
})
export class SharedModule { }
