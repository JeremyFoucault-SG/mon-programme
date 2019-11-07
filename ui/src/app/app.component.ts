import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { WishState } from './core/store/store.module/wishe/wish.state';
import { Observable } from 'rxjs';
import { Wish } from './shared/models/wishes.model';
import { GetAllWishesCoaching, GetAllWishesArticles } from './core/store/store.module/wishe/wish.action';
import { AuthenticationService } from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.isLogin().subscribe(res => {
      if (res) {
        this.store.dispatch(new GetAllWishesCoaching());
        this.store.dispatch(new GetAllWishesArticles());
      }
    });
  }
}
