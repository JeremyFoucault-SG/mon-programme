import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { ConnexionComponent } from 'src/app/features/connexion/connexion.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService, private modalService: ModalService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.isLogin().pipe(tap(data => {
      if (data) {
        return true;
      } else {
        this.modalService.init(ConnexionComponent, {}, {});
        return false;
      }
    }));
  }
}
