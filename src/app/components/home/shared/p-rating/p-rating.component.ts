import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchInputComponent } from '../search-input/search-input.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-p-rating',
  templateUrl: './p-rating.component.html',
  styleUrls: ['./p-rating.component.scss'],
  standalone: true,
  imports: [IonicModule,SearchInputComponent,ProductCardComponent]
})
export class PRatingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
