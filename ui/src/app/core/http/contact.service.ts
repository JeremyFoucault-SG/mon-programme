import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ContactService {

  url = `${environment.apiUrl}`;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

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

  contact(contact) {
    return this.http.post<any>(`${this.url}/contact`, contact)
    .pipe(
      tap(() =>  this.toastr.success('Demande de contact envoyé')),
      catchError((err) => {
        this.toastr.error(`Erreur lors de l'envoi du message`);
        return throwError(err);
      })
    );
  }
}
