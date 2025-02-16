import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from "../../../layout/layout.component";
import { SelectLocationComponent } from "../../home/shared/select-location/select-location.component";
import { SearchInputComponent } from "../../home/shared/search-input/search-input.component";
import { ProductCardComponent } from '../../home/shared/product-card/product-card.component';

@Component({
  selector: 'app-discount-banner',
  templateUrl: './discount-banner.component.html',
  styleUrls: ['./discount-banner.component.scss'],
  standalone:true,
  imports: [IonicModule, LayoutComponent, SelectLocationComponent, SearchInputComponent,ProductCardComponent]
})
export class DiscountBannerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
