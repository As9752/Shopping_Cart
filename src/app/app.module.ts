import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductModule } from "./product/product.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormsModule } from "@angular/forms";
import { HotelListComponent } from "./product/components/product-list/product-list.component";
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
