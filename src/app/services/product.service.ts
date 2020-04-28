import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private httpClient: HttpClient) {

    }
    baseUrl = "https://localhost:44354/api/Products";
    headers = new HttpHeaders({ 'content-type': 'application/json', 'accept': 'application/json' });    

    postProduct(data: any): Observable<HttpResponse<any>> {
        return this.httpClient.post<any>(this.baseUrl, data, {
            headers: this.headers,
            observe: "response"            
        });
    }

    getProducts(): Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(this.baseUrl);
    }

    deleteProduct(product: IProduct): Observable<HttpResponse<any>>{
        var deleteUrl = this.baseUrl + "/" + product.productId;
        return this.httpClient.delete<any>(deleteUrl, {
            observe: 'response'
        });
    }
}