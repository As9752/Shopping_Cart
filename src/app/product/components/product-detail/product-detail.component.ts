import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../../product.service";
import { Hotel } from "src/app/model/product";
import { of, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import emailjs from "emailjs-com";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class HotelDetailComponent {
  hotel: Hotel | null = null;
  showForm: boolean = false;
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
  constructor(
    private activedRoute: ActivatedRoute,
    private productSvc: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activedRoute.paramMap
      .pipe(
        switchMap((paramMap: ParamMap) => {
          const hotelId = paramMap.get("hotelId");

          if (hotelId) {
            console.log(hotelId);
            return this.productSvc.getProduct(hotelId);
          }
          return of(null);
        })
      )
      .subscribe({
        next: (hotel) => {
          this.hotel = hotel;
        },
      });
  }
  BookNow(item: any) {
    if (this.showForm === false) {
      this.showForm = true;
    } else {
      this.showForm = false;
    }
  }
  sendEmail() {
    this.showForm = false;

    emailjs
      .send(
        "service_a6f8v18",
        "template_s1lc4fh",
        {
          to_email: "babumishra7898@gmail.com", // Replace with recipient's email
          message: "Hello, this is a test email sent from Angular!",
        },
        "E3LKiGMaqM7wCO6xC"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // Handle success, e.g., show a success message to the user
        },
        (error) => {
          console.error("Email sending error:", error);
          // Handle error, e.g., show an error message to the user
        }
      );
  }

  showData() {
    console.log(this.formData);
    this.productSvc.getViewBookingData(this.formData);
    this.showForm = false;
  }
}
