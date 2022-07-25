import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { ICustomer } from '../customer'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class CustomersService {

    constructor(private http: HttpClient) {

    }

    getCustomers(queryParams): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>('http://localhost:8000/customers', { params: queryParams })
    }


}