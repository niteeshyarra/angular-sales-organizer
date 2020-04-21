import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private httpClient: HttpClient) {

    }
    productPostUrl = "https://localhost:44354/api/Products"
    headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accept': 'application/json' });    

    postProduct(data: any): Observable<HttpResponse<any>> {
        return this.httpClient.post<any>(this.productPostUrl, data, {
            headers: this.headers,
            observe: "response"            
        });
    }
}