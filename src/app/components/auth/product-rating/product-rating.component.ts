import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from "../../../layout/layout.component";
import { SelectLocationComponent } from "../../home/shared/select-location/select-location.component";
import { PRatingComponent } from '../../home/shared/p-rating/p-rating.component';
import { SearchInputComponent } from "../../home/shared/search-input/search-input.component";
import { ProductCardComponent } from "../../home/shared/product-card/product-card.component";

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],
  standalone: true,
  imports: [IonicModule, LayoutComponent, SelectLocationComponent, PRatingComponent, SearchInputComponent, ProductCardComponent],
})
export class ProductRatingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
