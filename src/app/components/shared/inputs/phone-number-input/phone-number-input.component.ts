import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-phone-number-input',
  templateUrl: './phone-number-input.component.html',
  styleUrls: ['./phone-number-input.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class PhoneNumberInputComponent  implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  showPassword: boolean = false;
    
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
