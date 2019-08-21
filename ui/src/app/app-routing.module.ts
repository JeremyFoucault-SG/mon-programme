import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { HomeComponent } from './features/home/home.component';
import { ListBlogComponent } from './shared/components/list-blog/list-blog.component';
import { CardNosProgrammesComponent } from './shared/components/card-nos-programmes/card-nos-programmes.component';
import { NutritionComponent } from './features/nutrition/nutrition.component';
// tslint:disable-next-line: max-line-length
import { FormSelectionProgrammeComponent } from './shared/components/selection-programme/form-selection-programme/form-selection-programme.component';
import { FunctionSmComponent } from './shared/components/form-function/function-sm/function-sm.component';
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




const routes: Routes = [
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
    path: 'choose',
    component: PopupMwComponent,
    data: {
      isChoose: true,
      imageUrl: 'https://zupimages.net/up/19/31/2e19.png',
    }
  },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'blog', component: ListBlogComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'select', component: FormSelectionProgrammeComponent },
  { path: 'func', component: FunctionSmComponent },
  { path: 'foot', component: FooterSmComponent },
  { path: 'objectif', component: MenuNosProgrammeComponent},
  { path: 'select-sm', component: FormSelectionProgrammeSmComponent },
  { path: 'contact-sm', component: ContactSmComponent },
  { path: 'article', component: ArticleBlogComponent },
  { path: 'detail-programme', component: DetailProgrammeComponent },
  { path: 'footer-sm', component: FooterInformationSmComponent },
  { path: 'nos-programmes', component: NosProgrammesComponent },
  { path: 'login', component: LoginModalComponent },
  { path: 'mon-suivi', component: StatsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
