import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class CartHeaderComponent  {

  @Input() title: string = 'Your Cart';
  @Input() subtitle: string = 'items';

}
