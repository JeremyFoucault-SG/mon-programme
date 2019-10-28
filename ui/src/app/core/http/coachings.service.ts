import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Programme } from 'src/app/shared/models/programmes.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QueryCoaching } from 'src/app/shared/models/query.coaching.interface';



@Injectable({
    providedIn: 'root',
})
export class CoachingsService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

    // Recuperation d'un programme  par l'id//
    public getProgramme(id: string): Observable<Programme> {
        return this.http.get(`${this.api}/coachings/${id}`).pipe(
            map((programme: any) => {
                return programme as Programme;
            }),
        );
    }


    // Recuperation de tous les programmes//
    public getAllProgrammes(): Observable<Programme[]> {
        return this.http.get(`${this.api}/coachings`).pipe(
            map((allProgrammes: any) => {
                return allProgrammes as Programme[];
            }),
        );
    }

    // Mise à jour d'un programme //
    // tslint:disable-next-line: variable-name
    public updateProgramme(payload: Programme, id: string) {
        return this.http.put<Programme>(`${this.api}/coachings/${id}`, payload);
    }


    // Ajout d'un programme //
    public addProgramme(payload: Programme) {
        return this.http.post<Programme>(`${this.api}/coachings`, payload);
    }

    // Supression d'un programme //
    // tslint:disable-next-line: variable-name
    public deleteProgramme(id: string) {
        return this.http.delete(`${this.api}/coachings/${id}`);
    }

    public searchProgramme(payload: QueryCoaching) {
        let query = payload.limit ? `limit=${payload.limit}` : '';
        query = payload.skip ? `${query.length > 0 ? query + '&' : ''}skip=${payload.skip}` : query;
        query = payload.rating ? `${query.length > 0 ? query + '&' : ''}rating=${payload.rating}` : query;
        query = payload.categories ? `${query.length > 0 ? query + '&' : ''}categories=${payload.categories}` : query;
        return this.http.get(`${this.api}/coachings/search${query.length > 0 ? '?' + query : ''}`);
    }
}

