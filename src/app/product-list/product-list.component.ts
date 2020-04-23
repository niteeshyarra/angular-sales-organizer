import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) { }

  products: IProduct[];

  onDelete(product: IProduct): void {
    this._productService.deleteProduct(product);
    this.products.filter(p => p.productId == product.productId);
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      data => this.products = data
    );
  }

}
