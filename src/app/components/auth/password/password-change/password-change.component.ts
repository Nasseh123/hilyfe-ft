import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
  standalone:true,
  imports:[IonicModule,LayoutComponent]
})
export class PasswordChangeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  showPassword: boolean = false;
    
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
