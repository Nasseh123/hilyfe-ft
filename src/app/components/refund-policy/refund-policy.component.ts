import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../layout/layout.component";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.scss'],
  imports: [LayoutComponent,IonicModule],
})
export class RefundPolicyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
