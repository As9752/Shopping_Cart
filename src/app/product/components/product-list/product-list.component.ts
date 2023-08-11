import { Component, OnInit } from "@angular/core";
import { Hotel } from "src/app/model/product";
import { ProductService } from "../../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];
  filters: any = {};
  minPrice = 0;
  maxPrice = 0;
  maxRating = 0;
  minRating = 0;
  hasLounge = false;
  hasParking = false;
  location = "";
  type: any;

  constructor(private productService: ProductService) {}
  // apiData: ApiResponse | null = null;
  isLoading = true;

  ngOnInit(): void {
    this.hotels = this.productService.getProducts();
    this.productService.getApiData().subscribe((hotels) => {
      this.hotels = hotels;
      this.filteredHotels = hotels;
    });
  }

  getFilteredHotels(hotel: any): void {
    console.log(this.filteredHotels);
    this.filteredHotels = this.hotels.filter(
      (hotel) =>
        hotel.price >= this.minPrice &&
        hotel.price <= this.maxPrice &&
        hotel.rating >= this.minRating &&
        hotel.rating <= this.maxRating &&
        hotel.type === this.type &&
        (this.location === "" ||
          hotel.location.toLowerCase().includes(this.location.toLowerCase()))
    );
  }
}
