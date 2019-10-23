import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class NewsletterService {

    constructor(private http: HttpClient, private toastr: ToastrService) { }

    public url = `${environment.apiUrl}`;

    newsletter(rdv) {
      return this.http.post<any>(`${this.url}/newsletter`, rdv)
      .pipe(
        tap(() =>  this.toastr.success('Inscription validé')),
        catchError((err) => {
          this.toastr.error(`Erreur lors de l'inscription`);
          return throwError(err);
        })
      );
    }
}
