import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/ICustomer';

@Injectable({
    providedIn: 'root'
})
export class PostCustomerService {
    private baseUrl = "https://localhost:44354/api/Customers";
    private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accept': 'application/json' });

    constructor(private httpClient: HttpClient) {

    }
    postCustomer(data): Observable<HttpResponse<any>> {
        return this.httpClient.post<any>(this.baseUrl, data, {
            headers: this.headers,
            observe: "response"
        });
    }

    getCustomers(): Observable<ICustomer[]>{
        return this.httpClient.get<ICustomer[]>(this.baseUrl);
    }

    deleteCustomer(customer: ICustomer): Observable<HttpResponse<any>>{
        var deleteUrl = this.baseUrl + "/" + customer.customerId;
        return this.httpClient.delete<any>(deleteUrl, {
            observe: 'response'
        });
    }
}