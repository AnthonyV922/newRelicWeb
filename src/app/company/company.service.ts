import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {ICompany} from './company'
import { Observable } from 'rxjs'
import { query } from '@angular/core/src/render3/query';
@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    
    constructor(private http: HttpClient) {

    }

    getCompanies(queryParams): Observable<ICompany[]> {
     
        
        return this.http.get<ICompany[]>('http://localhost:8000/companies', {params: queryParams})
    }


   
}