import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostCustomerService{
    customerPostUrl = "https://localhost:44354/api/Customers";
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'accept': 'application/json'  
        })
      };
    constructor(private httpClient: HttpClient){

    }
    postCustomer(data): void{
        console.log(data);
        this.httpClient.post(this.customerPostUrl, data, this.httpOptions).subscribe(
            response => console.log(response)
        );
    }
}