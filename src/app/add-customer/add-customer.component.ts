import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { PostCustomerService } from '../services/customer.service';
import { NotificationService } from '../services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  constructor(private _customerService: PostCustomerService,
    private _notificationSerice: NotificationService) { }

  customerModel = new Customer('', '');

  onSubmit(customerForm: NgForm): void {
    this._customerService.postCustomer(JSON.stringify(this.customerModel)).subscribe(
      response => {
        if (response.status == 200)
          this._notificationSerice.showSuccess("Product Added Successfully", "Success");
        customerForm.form.reset();
      },
      err => this._notificationSerice.showFailed("Status Code: " + String(err.status), "Failed")
    );
  }
}