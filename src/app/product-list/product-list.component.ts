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

  onDelete(product: IProduct, i: number): void {
    this._productService.deleteProduct(product).subscribe(
      data => {
        if(data.status == 200)
          this.products.splice(i, 1);
      }
    );
    
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      data => this.products = data
    );
  }

}
