import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { NotificationService } from '../services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private _productService: ProductService,
    private _notificationSerice: NotificationService) { }

  showMessage = false;

  productModel = new Product('', null);

  onStatus(status: any) {
    if (status == 200) {
      this.showMessage = true;
    }
  }

  onSubmit(productForm: NgForm): void {
    this._productService.postProduct(JSON.stringify(this.productModel))
      .subscribe(
        response => {
          if (response.status == 200)
            this._notificationSerice.showSuccess("Customer Added Successfully", "Success");
          productForm.form.reset();
        },
        err => this._notificationSerice.showFailed("Status Code: " + String(err.status), "Failed")
      );
  }

}
