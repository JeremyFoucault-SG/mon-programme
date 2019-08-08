import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { HomeComponent } from './features/home/home.component';
import { ListBlogComponent } from './shared/components/list-blog/list-blog.component';
import { CardNosProgrammesComponent } from './shared/components/card-nos-programmes/card-nos-programmes.component';
import { NutritionComponent } from './features/nutrition/nutrition.component';
import { FormSelectionProgrammeComponent } from './shared/components/selection-programme/form-selection-programme/form-selection-programme.component';
import { FunctionSmComponent } from './shared/components/form-function/function-sm/function-sm.component';
import { FooterSmComponent } from './core/footer/footer-sm/footer-sm.component';
import { FormSelectionProgrammeSmComponent } from './shared/components/selection-programme/form-selection-programme-sm/form-selection-programme-sm.component';






const routes: Routes = [
  { path: '', component: PopupMwComponent },
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
  { path: 'select-sm', component: FormSelectionProgrammeSmComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
