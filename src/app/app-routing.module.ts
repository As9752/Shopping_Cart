import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './product/components/add-product/add-product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { MinicartComponent } from './cart/components/mini-cart/mini-cart.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { CartComponent } from './cart/components/cart/cart.component';

const routes: Routes = [
{  path:'add',
  component:AddProductComponent

},
{
  path:'product',
  component:ProductListComponent
},
{
  path:'',
 pathMatch:'full',
 redirectTo:'/product'
},
{
  path: 'product/:productId',
  component: ProductDetailComponent
},
{
  path:'cart',
  component:CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
