import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Newsletters } from 'src/app/shared/models/newsletters.model';



@Injectable({
    providedIn: 'root',
})
export class NewsletterService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

     // Ajout d'une newsletter //
   public addNewsletter(payload: Newsletters) {
    return this.http.post<Newsletters>(`${this.api}/newsletters`, payload);
}

// Supression d'une newsletter //
// tslint:disable-next-line: variable-name
public deleteNewsletter(_id: string) {
    return this.http.delete(`${this.api}/newsletters/${_id}`);
}

}
