import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Settings } from '../../shared/models/settings.model';
import { Observable, Subject, ReplaySubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from 'src/app/shared/models/auth.model';
import { Register } from 'src/app/shared/models/register.model';


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

  register(register: Register): Observable<Register> {
    return this.http.post<Register>(`${this.configUrli}`, register);
  }
   login(username: string, password: string) {
    return this.http.post<any>(`${this.configUrl}`, { username, password })
      .pipe(
        tap((user) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.subject.next(true);
          }
        }),
        catchError((err) => {
          this.subject.next(false);
          return throwError(err);
        })
      );
  }

  isLogin(): Observable<boolean> {
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
