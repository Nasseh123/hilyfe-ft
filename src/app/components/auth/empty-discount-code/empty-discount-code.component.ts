import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../../layout/layout.component";
import { IonicModule } from '@ionic/angular';
import { PoliciesComponent } from '../../shared/policies/policies.component';

@Component({
  selector: 'app-empty-discount-code',
  templateUrl: './empty-discount-code.component.html',
  styleUrls: ['./empty-discount-code.component.scss'],
  imports: [LayoutComponent,IonicModule,PoliciesComponent],
})
export class EmptyDiscountCodeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
