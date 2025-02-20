import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../../layout/layout.component";
import { IonAccordion, IonicModule } from '@ionic/angular';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductDetailLayoutComponent } from "../../../layout/product-detail-layout/product-detail-layout.component";
import { CartHeaderComponent } from '../../home/shared/cart-header/cart-header.component';
import { CartCardComponent } from '../../home/shared/cart-card/cart-card.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [LayoutComponent, IonicModule, ProductDetailComponent, ProductDetailLayoutComponent,CartHeaderComponent,CartCardComponent],
  standalone:true,
  
})
export class CartComponent  {
  updateQuantity(newQuantity: number) {
    console.log('Updated quantity:', newQuantity);
  }
  
  removeItem() {
    console.log('Item removed');
  }
  

}
