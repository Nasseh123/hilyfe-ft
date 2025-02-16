import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class PasswordResetComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  showPassword: boolean = false;
    
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
