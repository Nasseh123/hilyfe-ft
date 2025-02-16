import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SelectLocationComponent } from '../select-location/select-location.component';

@Component({
  selector: 'app-hl-location-modal',
  templateUrl: './hl-location-modal.component.html',
  styleUrls: ['./hl-location-modal.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class HlLocationModalComponent  implements OnInit {
  isAlertOpen = false; // Alert starts hidden

  ngOnInit() {
    setTimeout(() => {
      this.isAlertOpen = true; // Show the alert after a slight delay
    }, 500);
  }

  closeAlert() {
    this.isAlertOpen = false; // Close the alert when "X" is clicked
  }

}
