import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../../layout/layout.component";
import { IonicModule } from '@ionic/angular';
import { InputwithCopyComponent } from '../../shared/inputs/inputwith-copy/inputwith-copy.component';
import { PoliciesComponent } from '../../shared/policies/policies.component';

@Component({
  selector: 'app-presentreferal-code',
  templateUrl: './presentreferal-code.component.html',
  styleUrls: ['./presentreferal-code.component.scss'],
  imports: [LayoutComponent,IonicModule,InputwithCopyComponent,PoliciesComponent],
})
export class PresentreferalCodeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
