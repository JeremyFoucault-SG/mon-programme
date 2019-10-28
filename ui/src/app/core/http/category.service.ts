import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  public api = `${environment.apiUrl}`;

  // Recuperation de tous les articles de blog//
  public getCategories(): Observable<Category[]> {
    return this.http.get(`${this.api}/categories`).pipe(
      map((allCategories: any) => {
        return allCategories as Category[];
      })
    );
  }
}
