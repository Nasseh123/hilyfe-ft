import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-present-discount-code',
  templateUrl: './present-discount-code.component.html',
  styleUrls: ['./present-discount-code.component.scss'],
  standalone:true,
  imports:[IonicModule,LayoutComponent]
})
export class PresentDiscountCodeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
