import { Component, Input, input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { HlSearchLocationComponent } from '../../home/shared/hl-search-location/hl-search-location.component';
import { ProductCardComponent } from '../../home/shared/product-card/product-card.component';
import { SearchInputComponent } from '../../home/shared/search-input/search-input.component';
import { SelectLocationComponent } from '../../home/shared/select-location/select-location.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:[IonicModule,LayoutComponent,HlSearchLocationComponent,ProductCardComponent,SearchInputComponent,SelectLocationComponent]
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
    @Input() image!: string; 
    @Input() name!: string;  
    @Input() price!: number; 
    @Input() isSelected: boolean = false;
  
    toggleSelection() {
      this.isSelected = !this.isSelected;
    }
  

}
