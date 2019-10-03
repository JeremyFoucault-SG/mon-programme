import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Settings } from '../../shared/models/settings.model';
import { Observable, Subject, ReplaySubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }

  configUrl = `${environment.apiUrl}/auth/signin`;

  configUrli = `${environment.apiUrl}/auth/signup`;

  private subject = new ReplaySubject<boolean>(1);

  register(setting: Settings): Observable<Settings> {
    return this.http.post<Settings>(`${this.configUrli}`, setting);
  }
  login(username: Settings['username'], password: Settings['password']) {
    return this.http.post<any>(`${this.configUrl}`, { username, password })
      .pipe(
        tap((user) => {
          if (user) {
            this.subject.next(true);
            localStorage.setItem('token', user.token);
          }
        }),
        catchError((err) => {
          this.subject.next(false);
          return throwError(err);
        })
      );
  }

  isLogin() {
    if (localStorage.getItem('token')) {
      this.subject.next(true);
    } else {
      this.subject.next(false);
    }
    return this.subject;
  }

  showSuccessLogout() {
    this.toastr.success('Vous êtes déconnecté(e)');
  }

  isLogout() {
    this.router.navigate(['/login']);
    this.showSuccessLogout();
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')) {
      this.subject.next(false);
    } else {
      this.subject.next(true);
    }
    return this.subject;


  }

}
