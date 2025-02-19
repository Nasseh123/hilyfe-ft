import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { HlLayoutComponent } from '../../home/shared/hl-layout/hl-layout.component';
import { ProductDetailLayoutComponent } from 'src/app/layout/product-detail-layout/product-detail-layout.component';
import { HlQuantityComponent } from '../../home/shared/hl-quantity/hl-quantity.component';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-added-cart',
  templateUrl: './added-cart.component.html',
  styleUrls: ['./added-cart.component.scss'],
  standalone:true,
  imports:[IonicModule, LayoutComponent,HlQuantityComponent,ProductDetailLayoutComponent,]
})
export class AddedCartComponent  {
  selectedSize: string = 'S';
  quantity: number = 1;

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
