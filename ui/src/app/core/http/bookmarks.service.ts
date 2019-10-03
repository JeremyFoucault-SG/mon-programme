import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bookmarks } from '../../shared/models/bookmarks.model';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class BookmarksService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;


    // Recuperation de tous les bookmarks//
    public getAllBookmarks(): Observable<Bookmarks[]> {
        return this.http.get(`${this.api}/bookmarks`).pipe(
            map((allBookmarks: any) => {
                return allBookmarks as Bookmarks[];
            }),
        );
    }

    // Ajout d'un bookmarks //
    public addBookmarks(payload: Bookmarks) {
        return this.http.post<Bookmarks>(`${this.api}/bookmarks`, payload);
    }

    // Supression d'un bookmarks //
    // tslint:disable-next-line: variable-name
    public deleteBookmarks(_id: string) {
        return this.http.delete(`${this.api}/bookmarks/${_id}`);
    }
}
