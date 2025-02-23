import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../../layout/layout.component";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
  imports: [LayoutComponent,IonicModule],
})
export class SecurityComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  showPassword: boolean = false;
    
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
