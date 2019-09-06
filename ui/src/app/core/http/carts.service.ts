import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cart } from '../../shared/models/cart.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class CartsService {

    constructor(private http: HttpClient) { }

    public api = `${environment.apiUrl}`;

    // creation d'une cart//
    public  createCart(cart: Cart): Observable<Cart> {
        return this.http.post<Cart>(`${this.api}/cart`, cart);
    }

    // mise a jour d'une cart par l'id//
    // tslint:disable-next-line: variable-name
    public updateCart(payload: Cart, _id: string): Observable<Cart> {
        return this.http.put<Cart>(`${this.api}/cart/${_id}`, payload);
    }

    public getAllCart(): Observable<Cart[]> {
        return this.http.get(`${this.api}/cart`).pipe(
            map((allCart: any) => {
                return allCart as Cart[];
            }),
        );
    }
}
