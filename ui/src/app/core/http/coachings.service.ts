import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Programmes } from 'src/app/shared/models/programmes.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root',
})
export class CoachingsService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

     // Recuperation d'un programme  par l'id//
     public getProgramme(id: string): Observable<Programmes> {
        return this.http.get(`${this.api}/coachings/${id}`).pipe(
            map((programme: any) => {
                return programme as Programmes;
            }),
        );
    }


    // Recuperation de tous les programmes//
    public getAllProgrammes(): Observable<Programmes[]> {
        return this.http.get(`${this.api}/coachings`).pipe(
            map((allProgrammes: any) => {
                return allProgrammes as Programmes[];
            }),
        );
    }

    // Mise à jour d'un programme //
    // tslint:disable-next-line: variable-name
    public updateProgramme(payload: Programmes, _id: string) {
        console.log(_id);
        return this.http.put<Programmes>(`${this.api}/coachings/${_id}` , payload);
    }


    // Ajout d'un programme //
   public addProgramme(payload: Programmes) {
        return this.http.post<Programmes>(`${this.api}/coachings`, payload);
    }

    // Supression d'un programme //
    // tslint:disable-next-line: variable-name
    public deleteProgramme(_id: string) {
        return this.http.delete(`${this.api}/coachings/${_id}`);
    }


}
