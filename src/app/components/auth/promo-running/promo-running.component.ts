import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchInputComponent } from '../../home/shared/search-input/search-input.component';
import { ProductCardComponent } from '../../home/shared/product-card/product-card.component';
import { SelectLocationComponent } from '../../home/shared/select-location/select-location.component';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-promo-running',
  templateUrl: './promo-running.component.html',
  styleUrls: ['./promo-running.component.scss'],
  standalone:true,
  imports:[IonicModule,SearchInputComponent,ProductCardComponent,SelectLocationComponent,LayoutComponent]
    
  
})
export class PromoRunningComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
