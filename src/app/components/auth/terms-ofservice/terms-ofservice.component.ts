import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-terms-ofservice',
  templateUrl: './terms-ofservice.component.html',
  styleUrls: ['./terms-ofservice.component.scss'],
  standalone:true,
  imports:[IonicModule,LayoutComponent]
})
export class TermsOfserviceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
