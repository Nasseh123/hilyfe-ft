import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../../layout/layout.component";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:true,
  imports: [LayoutComponent,IonicModule],
})
export class RegisterComponent  implements OnInit {
 
  constructor() { }

  ngOnInit() {
    
  }

  showPassword: boolean = false;
    
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


}
