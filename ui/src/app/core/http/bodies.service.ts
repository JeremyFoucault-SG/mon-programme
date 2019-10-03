import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Body } from 'src/app/shared/models/body.model';



@Injectable({
    providedIn: 'root',
})
export class BodiesService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;



    // Mise à jour d'un body //
    // tslint:disable-next-line: variable-name
    public updateBody(payload: Body, _id: string) {
        console.log(_id);
        return this.http.put<Body>(`${this.api}/bodies/${_id}` , payload);
    }


    // Ajout d'un body //
   public addBody(payload: Body) {
        return this.http.post<Body>(`${this.api}/bodies`, payload);
    }



}
