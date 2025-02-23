import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductDetailLayoutComponent } from "../../../layout/product-detail-layout/product-detail-layout.component";
import { CheckoutOrderitemsComponent } from '../../home/shared/checkout-orderitems/checkout-orderitems.component';
import { CheckoutGeneralComponent } from '../../home/shared/checkout-general/checkout-general.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone:true,
  imports: [IonicModule, ProductDetailLayoutComponent,CheckoutOrderitemsComponent,CheckoutGeneralComponent,CommonModule]
})
export class CheckoutComponent  {


  isOpen: boolean = false;

  toggleSummary() {
    this.isOpen = !this.isOpen;
  }

}
