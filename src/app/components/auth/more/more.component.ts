import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
  standalone:true,
  imports: [IonicModule, LayoutComponent]
})
export class MoreComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
