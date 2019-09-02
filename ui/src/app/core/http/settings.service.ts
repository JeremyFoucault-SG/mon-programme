import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Settings } from 'http2';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class SettingsService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

    // Recuperation d'une option par l'id//
    public getSetting(id: string): Observable<Settings> {
        return this.http.get(`${this.api}/settings/${id}`).pipe(
            map((setting: any) => {
                return setting as Settings;
            }),
        );
    }


    // Mise à jour d'une option //
    // tslint:disable-next-line: variable-name
    public updateSetting(payload: Settings, _id: string) {
        console.log(_id);
        return this.http.put<Settings>(`${this.api}/settings/${_id}` , payload);
    }
}
