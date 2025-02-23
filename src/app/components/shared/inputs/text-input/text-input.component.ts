import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class TextInputComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
