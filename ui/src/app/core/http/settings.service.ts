import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Settings } from 'src/app/shared/models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  public api = `${environment.apiUrl}`;

  public getAllSetting(): Observable<Settings[]> {
    return this.http.get(`${this.api}/settings`).pipe(
      map((setting: any) => {
        return setting as Settings[];
      })
    );
  }

  // Recuperation d'une option par l'id//
  public getSetting(): Observable<Settings> {
    return this.http.get(`${this.api}/settings`);
  }

  public createSetting(setting: Settings): Observable<Settings> {
    return this.http.post<Settings>(`${this.api}/settings`, setting);
  }

  public updateSettingsUser(payload: Settings): Observable<Settings> {
    return this.http.put<Settings>(`${this.api}/settings`, payload);
  }
}
