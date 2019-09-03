import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Wishes } from 'src/app/shared/models/wishes.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root',
})
export class WishesService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

    // Recuperation de tous les wishes//
    public getAllWishes(): Observable<Wishes[]> {
        return this.http.get(`${this.api}/wishes`).pipe(
            map((allWishes: any) => {
                return allWishes as Wishes[];
            }),
        );
    }

    // Ajout d'un wish //
    public addWish(payload: Wishes) {
        return this.http.post<Wishes>(`${this.api}/wishes`, payload);
    }

    // Supression d'un wish //
    // tslint:disable-next-line: variable-name
    public deleteWish(_id: string) {
        return this.http.delete(`${this.api}/wishes/${_id}`);
    }
}
