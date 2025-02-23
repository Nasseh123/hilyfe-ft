import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PoliciesComponent } from '../../shared/policies/policies.component';

@Component({
  selector: 'app-emptyreferal-code',
  templateUrl: './emptyreferal-code.component.html',
  styleUrls: ['./emptyreferal-code.component.scss'],
  standalone:true,
  imports:[IonicModule,LayoutComponent,PoliciesComponent]
})
export class EmptyreferalCodeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
