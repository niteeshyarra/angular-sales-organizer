import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostCustomerService {
    customerPostUrl = "https://localhost:44354/api/Customers";
    headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accept': 'application/json' });

    constructor(private httpClient: HttpClient) {

    }
    postCustomer(data): Observable<HttpResponse<any>> {
        console.log(data);
        return this.httpClient.post<any>(this.customerPostUrl, data, {
            headers: this.headers,
            observe: "response"
        });
    }
}