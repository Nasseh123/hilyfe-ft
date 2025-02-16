import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class SelectLocationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
