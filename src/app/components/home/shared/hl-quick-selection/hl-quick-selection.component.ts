import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { IonModal } from '@ionic/angular/common';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-hl-quick-selection',
  templateUrl: './hl-quick-selection.component.html',
  styleUrls: ['./hl-quick-selection.component.scss'],
  standalone: true,
  imports: [IonicModule, ]
})
export class HlQuickSelectionComponent    {

 
  isModalOpen = true; // Open modal on page load

  closeModal() {
    this.isModalOpen = false; // Close modal
  }

}
