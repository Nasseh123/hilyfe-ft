import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class ProductCardComponent  implements OnInit {

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
