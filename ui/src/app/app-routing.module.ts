import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { ArticleBlogComponent } from './features/article-blog/article-blog.component';
import { HomeComponent } from './features/home/home.component';
import { DashboardCompteSmComponent } from './features/dashboard-compte/dashboard-compte-sm/dashboard-compte-sm.component';
import { CommandeComponent } from './features/commande/commande.component';
import { DashboardSuiviComponent } from './features/dashboard-suivi/dashboard-suivi.component';
import { DashboardInfosPersonnellesComponent } from './features/dashboard-infos-personnelles/dashboard-infos-personnelles.component';
import { DashboardCompteComponent } from './features/dashboard-compte/dashboard-compte.component';
import { PratiqueSportiveMobileComponent } from './features/pratique-sportive-mobile/pratique-sportive-mobile';
import { BlogMobileComponent } from './features/blog-mobile/blog-mobile.component';
import { BlogComponent } from './features/blog/blog.component';


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
  {
    path: 'sante',
    component: BlogComponent,
    data: {
      title: 'santé',
      isTransparent: false,
      imageHeader: 'https://zupimages.net/up/19/31/puje.jpg'
    }
  },
  {
    path: 'pratique-sportive',
    component: BlogComponent,
    data: {
      title: 'pratique sportive',
      isTransparent: false,
      imageHeader: 'https://zupimages.net/up/19/31/puje.jpg'
    }
  },
  {
    path: 'style-de-vie-et-nutrition',
    component: BlogComponent,
    data: {
      title: 'style de vie & nutrition',
      isTransparent: false,
      imageHeader: 'https://zupimages.net/up/19/31/puje.jpg'
    }
  },
  { path: 'article', component: ArticleBlogComponent },
  { path: 'article-blog', component: ArticleBlogComponent },
  { path: 'dashboard-suivi', component: DashboardSuiviComponent },
  { path: 'dashboard-infos', component: DashboardInfosPersonnellesComponent },
  { path: 'dashboard-compte', component: DashboardCompteComponent },
  { path: 'dashboard-2', component: DashboardCompteSmComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'dashboard-3', component: DashboardSuiviComponent },
  { path: 'pratique-sportive-mobile', component: PratiqueSportiveMobileComponent },
  { path: 'blog-mobile', component: BlogMobileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
