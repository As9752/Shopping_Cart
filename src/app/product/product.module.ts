import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { HotelListComponent } from "./components/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { FormsModule } from "@angular/forms";
import { HotelDetailComponent } from "./components/product-detail/product-detail.component";
import { RouterModule } from "@angular/router";
import { NgForm } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@NgModule({
  declarations: [AddProductComponent, HotelListComponent, HotelDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [AddProductComponent, HotelListComponent, HotelDetailComponent],
})
export class ProductModule {}
