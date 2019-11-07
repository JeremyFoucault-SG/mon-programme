import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { ArticleBlogComponent } from './features/article-blog/article-blog.component';
import { HomeComponent } from './features/home/home.component';
import { CommandeComponent } from './features/commande/commande.component';
import { PratiqueSportiveMobileComponent } from './features/pratique-sportive-mobile/pratique-sportive-mobile';
import { BlogMobileComponent } from './features/blog-mobile/blog-mobile.component';
import { ProgrammesComponent } from './admin/programmes/programmes/programmes.component';
import { BlogComponent } from './features/blog/blog.component';
import { UpdateArticleComponent } from './admin/article/update-article/update-article.component';
import { ArticleComponent } from './admin/article/article/article.component';
import { InfoComponent } from './features/dashboard/info/info.component';
import { CompteComponent } from './features/dashboard/compte/compte.component';
import { SuiviComponent } from './features/dashboard/suivi/suivi.component';
import { ConnexionComponent } from './features/connexion/connexion.component';
import { InscriptionComponent } from './features/inscription/inscription.component';
import { ListingProgrammeComponent } from './features/listing-programme/listing-programme.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CardThumbProgramComponent } from './shared/components/card-thumb-program/card-thumb-program.component';
import { ListProgrammeComponent } from './features/list-programme/list-programme.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { BasketComponent } from './features/basket/basket.component';
import { PaiementComponent } from './features/paiement/paiement.component';
import { ProgrammeContentComponent } from './features/programme-content/programme-content.component';
import { ConnexionModalComponent } from './shared/components/register/connexion-modal/connexion-modal.component';
import { MyProgrammesComponent } from './features/my-programmes/my-programmes.component';



const routes: Routes = [
  {
    path: '',
    component: PopupMwComponent,
    data: {
      isChoose: true,
      imageUrl: 'https://zupimages.net/up/19/43/koz4.png',
      isVisible: false,
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
      isVisible: true,
    }
  },
  {
    path: 'sante',
    component: BlogComponent,
    data: {
      title: 'santé',
      isTransparent: false,
      imageHeader: 'https://zupimages.net/up/19/31/puje.jpg',
      isVisible: true,
    }
  },
  {
    path: 'pratique-sportive',
    component: BlogComponent,
    data: {
      title: 'pratique sportive',
      isTransparent: false,
      imageHeader: 'https://zupimages.net/up/19/31/puje.jpg',
      isVisible: true,
    }
  },
  {
    path: 'style-de-vie-et-nutrition',
    component: BlogComponent,
    data: {
      title: 'style de vie & nutrition',
      isTransparent: false,
      imageHeader: 'https://zupimages.net/up/19/31/puje.jpg',
      isVisible: true,
    }
  },
  {
    path: 'mon-panier',
    component: BasketComponent,
  data: {
    isVisible: true,
  }},
  { path: 'mes-programmes', canActivate: [AuthGuard], component: MyProgrammesComponent, data: {
    isVisible: true,
  }},
  { path: 'mes-programmes/:title', component: ProgrammeContentComponent, data: {
    isVisible: true,
  }},
  { path: 'nos-programmes/:title', component: ListingProgrammeComponent, data: {
    isVisible: true,
  }},
  { path: 'nos-programmes', component: ListProgrammeComponent, data: {
    isVisible: true,
  }},
  { path: 'articles', component: ArticleComponent, data: {
    isVisible: true,
  } },
  { path: 'articles/:urlTitle', component: ArticleBlogComponent, data: {
    isVisible: true,
  } },
  { path: 'article-blog', component: ArticleBlogComponent, data: {
    isVisible: true,
  } },
  { path: 'mon-compte', canActivate: [AuthGuard], component: CompteComponent, data: {
    isVisible: true,
  } },
  { path: 'mon-compte/suivi', canActivate: [AuthGuard], component: SuiviComponent, data: {
    isVisible: true,
  } },
  { path: 'mon-compte/infos', canActivate: [AuthGuard], component: InfoComponent, data: {
    isVisible: true,
  } },
  { path: 'mon-compte/favoris', canActivate: [AuthGuard], component : WishlistComponent, data: {
    isVisible: true,
  }},
  { path: 'login', component: ConnexionComponent, data: {
  }},
  { path: 'commande', canActivate: [AuthGuard], component: CommandeComponent, data: {
    isVisible: true,
  } },
  { path: 'pratique-sportive-mobile', component: PratiqueSportiveMobileComponent, data: {
    isVisible: true,
  } },
  { path: 'blog-mobile', component: BlogMobileComponent, data: {
    isVisible: true,
  } },
  { path: 'inscription', component: InscriptionComponent, data: {
    isVisible: true,
  }},
  { path: 'inscription', component: InscriptionComponent, data: {
    isVisible: true,
  }},
  { path: 'create-programme', component: ProgrammesComponent, data: {
    isVisible: true,
  } },
  { path: 'update-article/:id', component: UpdateArticleComponent, data: {
    isVisible: true,
  }},
  { path: 'create-article', component: UpdateArticleComponent, data: {
    isVisible: true,
  }},
  { path: 'list-article', component: ArticleComponent, data: {
    isVisible: true,
  }},
  { path: 'paiement', component: PaiementComponent, data: {
    isVisible: true,
  }},
  { path: 'login-modal', component: ConnexionModalComponent, data: {
    isVisible: true,
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
