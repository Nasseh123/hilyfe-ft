import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class PasswordInputComponent  implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  showPassword: boolean = false;
    
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
