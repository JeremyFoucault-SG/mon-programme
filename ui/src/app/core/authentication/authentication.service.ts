import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Settings} from '../../shared/models/settings.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public user: boolean;

  constructor(private http: HttpClient) { }

  configUrl = `${environment.apiUrl}/auth/signin`;

  configUrli = `${environment.apiUrl}/auth/signup`;

  register(setting: Settings): Observable<Settings> {
    console.log(setting);
    return this.http.post<Settings>(`${this.configUrli}`, setting);
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.configUrl}`, { username, password })
      .pipe(tap((user) => {
        if (user) {
          this.user = true;
          localStorage.setItem('token', user.token);
        }
      }));
  }

  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
  }

}
