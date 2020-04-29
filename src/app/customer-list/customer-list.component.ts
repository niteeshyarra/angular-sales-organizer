import { Component, OnInit } from '@angular/core';
import { PostCustomerService } from '../services/customer.service';
import { ICustomer } from '../models/ICustomer';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private _customerService: PostCustomerService,
    private _notificationService: NotificationService) { }

  customers: ICustomer[];

  onDelete(customer: ICustomer, i: number): void {
    this._customerService.deleteCustomer(customer).subscribe(
      response => {
        if (response.status == 200)
          this.customers.splice(i, 1);
      }
    );
  }

  ngOnInit(): void {
    this._customerService.getCustomers().subscribe(
      data => { this.customers = data },
      err => this._notificationService.showFailed("Failed to Load Data", "Failed")
    );
  }

}
