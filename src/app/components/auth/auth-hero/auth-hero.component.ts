import { Component, OnInit, } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from "../../../layout/layout.component";

@Component({
  selector: 'app-auth-hero',
  templateUrl: './auth-hero.component.html',
  styleUrls: ['./auth-hero.component.scss'],
  standalone:true,
  imports: [IonicModule, LayoutComponent]
})
export class AuthHeroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
