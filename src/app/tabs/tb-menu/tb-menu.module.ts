import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbMenuPageRoutingModule } from './tb-menu-routing.module';

import { TbMenuPage } from './tb-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbMenuPageRoutingModule
  ],
  declarations: [TbMenuPage]
})
export class TbMenuPageModule {}
