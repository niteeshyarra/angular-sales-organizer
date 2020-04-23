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
    showMessage = false;
    customerModel = new Customer('','');

    onStatus(status:any){
      if(status == 200){
        this.showMessage = true;
      }
    }

    toggleShowMessage(){
      return this.showMessage== false;
    }
    onSubmit(): void{
      this._customerService.postCustomer(JSON.stringify(this.customerModel)).subscribe(
        response => this.onStatus(response.status)
      );
    }
}