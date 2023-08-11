import { Injectable } from "@angular/core";
import { Hotel } from "../model/product";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "http://localhost:8034/hotel-api/v1/getall";

  private counter = 1;
  private hotels: Hotel[] = [];

  private productsList: Hotel[] = [];
  private productsSubject$: BehaviorSubject<Hotel[]> = new BehaviorSubject(
    this.getFromStorage()
  );
  products$ = this.productsSubject$.asObservable();

  viewBooking: any[] = [{ name: "ashish" }];

  getFromStorage() {
    const productsFromStorage = sessionStorage.getItem("products");
    if (productsFromStorage) {
      this.hotels = JSON.parse(productsFromStorage);
    }
    return this.hotels;
  }

  setToStorage() {
    sessionStorage.setItem("products", JSON.stringify(this.hotels));
  }

  getProducts() {
    return this.hotels;
  }

  // addProduct(product: Product): void {
  //   this.products.push(product);
  //   this.setToStorage();
  // }

  constructor(private http: HttpClient) {}

  getApiData() {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  addProduct(hotel: Hotel) {
    return this.http.post("http://localhost:8034/hotel-api/v1/hotels", hotel);
  }

  // getAllProducts() {

  //   return this.getFromStorage()

  // }

  getProduct(id: string) {
    return this.http.get<Hotel>(
      `http://localhost:8034/hotel-api/v1/hotels/${id}`
    );
  }

  getAllFromAPI() {
    return this.http.get<Hotel[]>("http://localhost:8034/hotel-api/v1/getall");
  }
  getViewBookingData(item: any) {
    console.log(1, item);
    // this.viewBooking.push(item);
    this.viewBooking = [...this.viewBooking, item];
    console.log(2, this.viewBooking);
  }
  getBookingInViewBooking(): any[] {
    console.log(3, this.viewBooking);
    return this.viewBooking;
  }
}
