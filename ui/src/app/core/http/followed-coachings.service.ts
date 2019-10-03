import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Followed } from 'src/app/shared/models/followed-coachings.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root',
})
export class FollowedcoachingsService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;


    // Recuperation de tous les programmes-suivi//
    public getAllFollowed(): Observable<Followed[]> {
        return this.http.get(`${this.api}/followed`).pipe(
            map((allfollowed: any) => {
                return allfollowed as Followed[];
            }),
        );
    }

    // Ajout d'un programme-suivi //
    public addFollowed(payload: Followed) {
        return this.http.post<Followed>(`${this.api}/followed`, payload);
    }
}
