import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-data-privacy',
  templateUrl: './data-privacy.component.html',
  styleUrls: ['./data-privacy.component.scss'],
  standalone:true,
  imports:[IonicModule,LayoutComponent]
})
export class DataPrivacyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
