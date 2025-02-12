import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss'],
  standalone:true,
  imports: [IonicModule],

})
export class OtpVerificationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
