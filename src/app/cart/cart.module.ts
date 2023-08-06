import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinicartComponent } from './components/mini-cart/mini-cart.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    MinicartComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinicartComponent
  ]
})
export class CartModule { }