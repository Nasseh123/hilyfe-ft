import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-hl-search-location',
  templateUrl: './hl-search-location.component.html',
  styleUrls: ['./hl-search-location.component.scss'],
  standalone:true,
  imports: [IonicModule,ProductCardComponent]
})
export class HlSearchLocationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
