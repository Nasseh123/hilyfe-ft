import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class OrderSummaryComponent {

  isOpen: boolean = false;

  toggleSummary() {
    this.isOpen = !this.isOpen;
  }
}
