
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {  catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private url = `${environment.apiUrl}/upload`;

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }


  upload(formData: FormData): Observable<{id: string, url: string}> {
    return this.httpClient.post<{id: string, url: string}>(`${this.url}`, formData)
    .pipe(
      catchError((err) => {
        this.toastr.error(`Impossible d'uploader la photo`, 'Erreur');
        return throwError(err);
      })
    );
  }

}
