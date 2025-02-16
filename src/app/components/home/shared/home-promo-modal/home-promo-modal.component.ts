import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-promo-modal',
  templateUrl: './home-promo-modal.component.html',
  styleUrls: ['./home-promo-modal.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class HomePromoModalComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  isModalOpen = true; // Open modal by default

  closeModal() {
    this.isModalOpen = false; // Close the modal when "X" is clicked
  }


}
