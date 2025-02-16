import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchInputComponent } from '../../home/shared/search-input/search-input.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { SelectLocationComponent } from '../../home/shared/select-location/select-location.component';
import { ProductCardComponent } from '../../home/shared/product-card/product-card.component';
import { HlLocationModalComponent } from '../../home/shared/hl-location-modal/hl-location-modal.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone:true,
  imports:[IonicModule,SearchInputComponent,LayoutComponent,SelectLocationComponent,ProductCardComponent,HlLocationModalComponent]
})
export class LocationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
