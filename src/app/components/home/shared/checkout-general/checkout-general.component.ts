import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HlQuantityComponent } from "../hl-quantity/hl-quantity.component";

@Component({
  selector: 'app-checkout-general',
  templateUrl: './checkout-general.component.html',
  styleUrls: ['./checkout-general.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule, HlQuantityComponent]
})
export class CheckoutGeneralComponent  {

  isModalOpen = false;  // Controls modal visibility
  selectedSize = 'S';   // Default size selection
  quantity = 1;         // Default quantity
  sizes = ['S', 'M', 'L', 'XL']; // Size options

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
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
