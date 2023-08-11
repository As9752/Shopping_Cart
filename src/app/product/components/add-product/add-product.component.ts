import { Component, ViewChild } from "@angular/core";
import { ProductItemComponent } from "../product-item/product-item.component";
import { HotelListComponent } from "../product-list/product-list.component";
import { ProductService } from "../../product.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent {
  constructor(private ProductService: ProductService) {}
  showForm = false;

  formData = {
    id: 0,
    name: "",
    type: "",
    location: "",
    price: 0,
    rating: 0,
    hasLounge: false,
    hasParking: false,
  };

  onAddHotel() {
    console.log(this.formData);

    this.ProductService.addProduct({
      id: this.formData.id,
      name: this.formData.name,
      type: this.formData.type,
      price: parseFloat("" + this.formData.price),
      rating: this.formData.rating,
      location: this.formData.location,
      haslounge: this.formData.hasLounge,
      hasparking: this.formData.hasParking,
    }).subscribe();

    this.formData = {
      id: 0,
      name: "",
      type: "",
      price: 0,
      rating: 0,
      location: "",
      hasLounge: false,
      hasParking: false,
    };
  }

  hideForm() {
    this.showForm = false;
  }
}
