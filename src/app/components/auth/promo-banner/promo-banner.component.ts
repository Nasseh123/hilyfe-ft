import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { ProductCardComponent } from '../../home/shared/product-card/product-card.component';
import { SearchInputComponent } from '../../home/shared/search-input/search-input.component';
import { SelectLocationComponent } from '../../home/shared/select-location/select-location.component';
import { ModalController } from '@ionic/angular';
import { HomePromoModalComponent } from '../../home/shared/home-promo-modal/home-promo-modal.component';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.component.html',
  styleUrls: ['./promo-banner.component.scss'],
  standalone:true,
  imports:[IonicModule,LayoutComponent,SelectLocationComponent,SearchInputComponent,ProductCardComponent,HomePromoModalComponent]
})
export class PromoBannerComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}


}
