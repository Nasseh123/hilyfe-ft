import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HlQuantityComponent } from '../hl-quantity/hl-quantity.component';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
  standalone:true,
  imports:[IonicModule,HlQuantityComponent]
})
export class CartCardComponent  {

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() size: string = '';
  @Input() quantity: number = 1;

  @Output() quantityChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<void>();

  increaseQuantity() {
    this.quantityChange.emit(this.quantity + 1);
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantityChange.emit(this.quantity - 1);
    }
  }

  removeItem() {
    this.remove.emit();
  }

}
