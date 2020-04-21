import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { PostCustomerService } from '../services/customer.service';

@Component({
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent{
    constructor(private postCustomerService: PostCustomerService){

    }
    customerModel = new Customer('','');
    onSubmit(): void{
      this.postCustomerService.postCustomer(JSON.stringify(this.customerModel));
    }
}