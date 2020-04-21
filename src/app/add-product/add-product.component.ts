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

  productModel = new Product('', null);

  onSubmit(): void {
    this._productService.postProduct(JSON.stringify(this.productModel))
      .subscribe(response => console.log(response.status));
  }

}
