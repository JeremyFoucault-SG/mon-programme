import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Wish } from 'src/app/shared/models/wishes.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Programme } from 'src/app/shared/models/programmes.model';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';
import { ProgrammesDTO } from 'src/app/shared/models/coaching.dto';
import { User } from 'src/app/shared/models/user.model';



@Injectable({
    providedIn: 'root',
})
export class WishesService {


    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

    // Recuperation de tous les wishes//
    public getAllWishesArticles(): Observable<Wish[]> {
        return this.http.get(`${this.api}/wishes/articles`).pipe(
            map((allWishes: any) => {
                return allWishes as Wish[];
            }),
        );
    }
    public getAllWishesCoachings(): Observable<Wish[]> {
        return this.http.get(`${this.api}/wishes/coachings`).pipe(
            map((allWishes: any) => {
                return allWishes as Wish[];
            }),
        );
    }

    // Ajout d'un wish //
    public addWishCoaching(payload: Wish): Observable<Wish> {
        return this.http.post<Wish>(`${this.api}/wishes/coachings`, payload);
    }

    public addWishArticle(payload: Wish): Observable<Wish> {
        return this.http.post<Wish>(`${this.api}/wishes/articles`, payload);
    }

    // tslint:disable-next-line: variable-name
    public deleteWish(_id: string) {
        return this.http.delete(`${this.api}/wishes/${_id}`);
    }
}




