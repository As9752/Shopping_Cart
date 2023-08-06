import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-minicart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MinicartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }
}