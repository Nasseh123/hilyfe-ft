import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbCartPageRoutingModule } from './tb-cart-routing.module';

import { TbCartPage } from './tb-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbCartPageRoutingModule
  ],
  declarations: [TbCartPage]
})
export class TbCartPageModule {}
