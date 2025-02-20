import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductDetailLayoutComponent } from "../../../layout/product-detail-layout/product-detail-layout.component";
import { OrderSummaryComponent } from '../../home/shared/order-summary/order-summary.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone:true,
  imports: [IonicModule, ProductDetailLayoutComponent,OrderSummaryComponent]
})
export class CheckoutComponent  {


  isOpen: boolean = false;

  toggleSummary() {
    this.isOpen = !this.isOpen;
  }

}
