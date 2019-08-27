import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { ListBlogComponent } from './shared/components/list-blog/list-blog.component';
import { CardNosProgrammesComponent } from './shared/components/card-nos-programmes/card-nos-programmes.component';
import { NutritionComponent } from './features/nutrition/nutrition.component';
// tslint:disable-next-line: max-line-length
import { FormSelectionProgrammeComponent } from './shared/components/selection-programme/form-selection-programme/form-selection-programme.component';
import { FunctionComponent } from './shared/components/form-function/function/function.component';
import { FooterSmComponent } from './core/footer/footer-sm/footer-sm.component';
import { MenuNosProgrammeComponent } from './shared/components/menu-nos-programme/menu-nos-programme.component';
// tslint:disable-next-line: max-line-length
import { FormSelectionProgrammeSmComponent } from './shared/components/selection-programme/form-selection-programme-sm/form-selection-programme-sm.component';
import { ContactSmComponent } from './shared/components/contact-sm/contact-sm.component';
import { ArticleBlogComponent } from './features/article-blog/article-blog.component';
import { DetailProgrammeComponent } from './shared/components/detail-programme/detail-programme.component';
import { NosProgrammesComponent } from './features/nos-programmes/nos-programmes.component';
import { LoginModalComponent } from './features/login-modal/login-modal.component';
import { FooterInformationSmComponent } from './core/footer/footer-information-sm/footer-information-sm.component';
import { StatsComponent } from './features/stats/stats.component';
import { InfosComponent } from './features/infos/infos.component';
import { LoginAccueilComponent } from './shared/components/login-sm/login-accueil/login-accueil.component';
import { Inscription1Component } from './shared/components/login-sm/inscription1/inscription1.component';
import { Inscription2Component } from './shared/components/login-sm/inscription2/inscription2.component';
import { Inscription3Component } from './shared/components/login-sm/inscription3/inscription3.component';
import { Inscription4Component } from './shared/components/login-sm/inscription4/inscription4.component';
import { ConnexionComponent } from './shared/components/login-sm/connexion/connexion.component';
import { DashboardCompteSmComponent } from './features/dashboard-compte-sm/dashboard-compte-sm.component';
import { HomeComponent } from './features/home-container/home.component';
import { CommandeComponent } from './features/commande/commande.component';
import { DashboardSuiviComponent } from './features/dashboard-suivi/dashboard-suivi.component';
import { DashboardInfoSmComponent } from './features/dashboard-info-sm/dashboard-info-sm.component';
import { NosProgrammeMobileComponent } from './features/nos-programme-mobile/nos-programme-mobile.component';
import { BlogMobileComponent } from './features/blog-mobile/blog-mobile.component';

const routes: Routes = [
  {
    path: '',
    component: PopupMwComponent,
    data: {
      isChoose: true,
      imageUrl: 'https://zupimages.net/up/19/31/2e19.png',
    }
  },
  {
    path: 'men',
    component: PopupMwComponent,
    data: {
      isMen: true,
      textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.`,
      imageUrl: 'https://zupimages.net/up/19/31/2n2z.png',


    }
  },
  {
    path: 'women',
    component: PopupMwComponent,
    data: {
      isWomen: true,
      textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.`,
      imageUrl: 'https://zupimages.net/up/19/31/2e19.png',
    }
  },
  {
    path: 'accueil',
    component: HomeComponent,
    data: {
      title: 'Accueil',
      isTransparent: true,
    }
  },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'blog', component: ListBlogComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'select', component: FormSelectionProgrammeComponent },
  { path: 'func', component: FunctionComponent },
  { path: 'foot', component: FooterSmComponent },
  { path: 'objectif', component: MenuNosProgrammeComponent },
  { path: 'select-sm', component: FormSelectionProgrammeSmComponent },
  { path: 'contact-sm', component: ContactSmComponent },
  { path: 'article', component: ArticleBlogComponent },
  { path: 'detail-programme', component: DetailProgrammeComponent },
  { path: 'footer-sm', component: FooterSmComponent },
  { path: 'nos-programmes', component: NosProgrammesComponent },
  { path: 'login-sm', component: LoginAccueilComponent },
  { path: 'inscription-1', component: Inscription1Component },
  { path: 'inscription-2', component: Inscription2Component },
  { path: 'inscription-3', component: Inscription3Component },
  { path: 'inscription-4', component: Inscription4Component },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'login', component: LoginModalComponent },
  { path: 'mon-suivi', component: StatsComponent },
  { path: 'infos', component: InfosComponent },
  {path: 'dashboard-2', component: DashboardCompteSmComponent},
  { path: 'commande', component: CommandeComponent },
  {path: 'dashboard-3', component: DashboardSuiviComponent},
  { path: 'nos-prog-mobile', component: NosProgrammeMobileComponent},
  { path: 'blog-mobile', component: BlogMobileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
