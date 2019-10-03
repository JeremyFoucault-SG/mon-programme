import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Login } from '../../shared/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) { }
  urlApi = `${environment.apiUrl}/auth/signin`;
  urlReset = `${environment.apiUrl}/auth/forget`;
  urlMail = `${environment.apiUrl}/auth/validemail`;
  public api = `${environment.apiUrl}`;
  public user: boolean;


  isLogin() {
    if (localStorage.getItem('token')) {
      this.user = true;
    }
  }

  logout() {
    sessionStorage.clear();
    this.user = false;
  }

}
