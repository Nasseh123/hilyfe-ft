import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register-email-confirmation',
  templateUrl: './register-email-confirmation.component.html',
  styleUrls: ['./register-email-confirmation.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class RegisterEmailConfirmationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
