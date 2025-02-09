import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-linked-account',
  templateUrl: './linked-account.component.html',
  styleUrls: ['./linked-account.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class LinkedAccountComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  showPassword: boolean = false;
    
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
