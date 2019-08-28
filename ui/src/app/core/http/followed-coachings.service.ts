import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root',
})
export class FollowedcoachingsService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;
}