import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { PostCustomerService } from '../services/customer.service';

@Component({
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent{
    constructor(private _customerService: PostCustomerService){

    }
    customerModel = new Customer('','');
    onSubmit(): void{
      this._customerService.postCustomer(JSON.stringify(this.customerModel)).subscribe(
        response => console.log(response.status)
      );
    }
}