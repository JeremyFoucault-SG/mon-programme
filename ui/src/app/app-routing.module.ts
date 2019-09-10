import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { ArticleBlogComponent } from './features/article-blog/article-blog.component';
import { HomeComponent } from './features/home/home.component';
import { CommandeComponent } from './features/commande/commande.component';
import { PratiqueSportiveMobileComponent } from './features/pratique-sportive-mobile/pratique-sportive-mobile';
import { BlogMobileComponent } from './features/blog-mobile/blog-mobile.component';
import { CreateArticleComponent } from './admin/article/create-article/create-article.component';
import { ProgrammesComponent } from './admin/programmes/programmes/programmes.component';
import { BlogComponent } from './features/blog/blog.component';
import { UpdateArticleComponent } from './admin/article/update-article/update-article.component';
import { ArticleComponent } from './admin/article/article/article.component';
import { InfoComponent } from './features/dashboard/info/info.component';
import { CompteComponent } from './features/dashboard/compte/compte.component';
import { SuiviComponent } from './features/dashboard/suivi/suivi.component';
import { ListingProgrammeComponent } from './features/listing-programme/listing-programme.component';
import { LoginModalComponent } from './features/login-modal/login-modal.component';



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
    path: 'homme',
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
    path: 'femme',
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
  { path: 'article/:id', component: ArticleBlogComponent },
  { path: 'article-blog', component: ArticleBlogComponent },
  { path: 'mon-compte/suivi', component: SuiviComponent },
  { path: 'mon-compte/infos', component: InfoComponent },
  { path: 'mon-compte', component: CompteComponent },

  { path: 'commande', component: CommandeComponent },
  { path: 'pratique-sportive-mobile', component: PratiqueSportiveMobileComponent },
  { path: 'blog-mobile', component: BlogMobileComponent },
  { path: 'create-article', component: CreateArticleComponent},
  { path: 'create-programme', component: ProgrammesComponent },
  { path: 'update-article/:id', component: UpdateArticleComponent},
  { path: 'list-article', component: ArticleComponent},
  { path: 'detail-programme', component: ListingProgrammeComponent},
  { path: 'login', component: LoginModalComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
