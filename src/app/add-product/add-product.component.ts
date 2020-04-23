import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private _productService: ProductService) { }

  showMessage = false;

  productModel = new Product('', null);

  onStatus(status:any){
    if(status == 200){
      this.showMessage = true;
    }
  }

  onSubmit(): void {
    this._productService.postProduct(JSON.stringify(this.productModel))
      .subscribe(response => this.onStatus(response.status));
  }

}
