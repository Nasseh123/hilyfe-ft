import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { LayoutComponent } from "../../../layout/layout.component";
import { HlQuantityComponent } from '../../home/shared/hl-quantity/hl-quantity.component';
import { ProductDetailLayoutComponent } from 'src/app/layout/product-detail-layout/product-detail-layout.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone:true,
  imports: [IonicModule, LayoutComponent,HlQuantityComponent,ProductDetailLayoutComponent]
})
export class ProductDetailComponent  {

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
