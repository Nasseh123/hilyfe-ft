import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { HlLayoutComponent } from '../../home/shared/hl-layout/hl-layout.component';
import { SelectLocationComponent } from "../../home/shared/select-location/select-location.component";
import { SearchInputComponent } from "../../home/shared/search-input/search-input.component";
import { ProductCardComponent } from '../../home/shared/product-card/product-card.component';
import { HomePromoModalComponent } from "../../home/shared/home-promo-modal/home-promo-modal.component";
import { HlQuickSelectionComponent } from "../../home/shared/hl-quick-selection/hl-quick-selection.component";

@Component({
  selector: 'app-quick-selection',
  templateUrl: './quick-selection.component.html',
  styleUrls: ['./quick-selection.component.scss'],
  standalone: true,
  imports: [IonicModule, LayoutComponent, HlLayoutComponent, SelectLocationComponent, SearchInputComponent, ProductCardComponent, HomePromoModalComponent, HlQuickSelectionComponent]
})
export class QuickSelectionComponent   {

}
