import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ArticleBlog } from '../../shared/models/articles-blog.model';
import { map } from 'rxjs/operators';
import { QueryArticles } from 'src/app/shared/models/queryArticles.model';


@Injectable({
    providedIn: 'root',
})
export class ArticlesService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

    public searchArticles(payload: QueryArticles) {
        let query = payload.limit ? `limit=${payload.limit}` : '';
        query = payload.skip ? `${query.length > 0 ? query + '&' : ''}skip=${payload.skip}` : query;
        query = payload.date ? `${query.length > 0 ? query + '&' : ''}date=${payload.date}` : query;
        query = payload.categories ? `${query.length > 0 ? query + '&' : ''}categories=${payload.categories}` : query;

        return this.http.get(`${this.api}/articles/search${query.length > 0 ? '?' + query : ''}`);

    }

    // Recuperation article de blog par l'id//
    public getArticle(id: string): Observable<ArticleBlog> {
        return this.http.get(`${this.api}/articles/${id}`).pipe(
            map((articleBlog: any) => {
                return articleBlog as ArticleBlog;
            }),
        );
    }

    // Recuperation de tous les articles de blog//
    public getAllArticles(): Observable<ArticleBlog[]> {
        return this.http.get(`${this.api}/articles`).pipe(
            map((allArticlesBlog: any) => {
                return allArticlesBlog as ArticleBlog[];
            }),
        );
    }

    // Suprimer un article par son id/
    public deleteArticle(id: string): Observable<ArticleBlog> {
        return this.http.delete(`${this.api}/articles/${id}`).pipe(
            map((articleBlog: any) => {
                return articleBlog as ArticleBlog;
            }),
        );
    }

    // creation d'un article de blog//
    public  createArticle(article: ArticleBlog): Observable<ArticleBlog> {
        return this.http.post<ArticleBlog>(`${this.api}/articles`, article);
    }

    // mise a jour d'un article de blog par l'id//
    // tslint:disable-next-line: variable-name
    public updateArticle(payload: ArticleBlog, _id: string): Observable<ArticleBlog> {
        return this.http.put<ArticleBlog>(`${this.api}/articles/${_id}`, payload);
    }

}
