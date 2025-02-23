import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  standalone:true,
  imports:[IonicModule,LayoutComponent]
})
export class MyProfileComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
