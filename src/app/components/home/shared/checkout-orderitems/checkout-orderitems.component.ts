import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-checkout-orderitems',
  templateUrl: './checkout-orderitems.component.html',
  styleUrls: ['./checkout-orderitems.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class CheckoutOrderitemsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
