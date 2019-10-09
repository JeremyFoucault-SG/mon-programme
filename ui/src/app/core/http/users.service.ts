import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class UsersService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

    public addUserInfos(payload: User): Observable<User> {
        return this.http.post<User>(`${this.api}/users`, payload);
    }
}
