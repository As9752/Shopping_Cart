import { Component, ViewChild } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private ProductService: ProductService) {}
  showForm = false;

  formData = {
    id:0,
    name: '',
    description: '',
    price: 0,
  };

  onAddProduct() {
    console.log(this.formData);

    this.ProductService.addProduct({
      // id:this.formData.id,
      title: this.formData.name,
      description: this.formData.description,
      price: parseFloat('' + this.formData.price),
    }).subscribe();

    this.formData = {
      id:0,
      name: '',
      description: '',
      price: 0,
    };
  }

  hideForm() {
    this.showForm = false;
  }
}