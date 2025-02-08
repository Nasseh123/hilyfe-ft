import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbHomePageRoutingModule } from './tb-home-routing.module';

import { TbHomePage } from './tb-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbHomePageRoutingModule
  ],
  declarations: [TbHomePage]
})
export class TbHomePageModule {}
