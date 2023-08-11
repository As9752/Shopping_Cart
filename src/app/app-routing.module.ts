import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./product/components/add-product/add-product.component";
import { HotelListComponent } from "./product/components/product-list/product-list.component";
import { HotelDetailComponent } from "./product/components/product-detail/product-detail.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "add", 
  component: AddProductComponent
 },
  {
    path: "home",
    component: HomeComponent,
  },

  {
    path: "hotel",
    component: HotelListComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home",
  },
  {
    path: "hotel/:hotelId",
    component: HotelDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
