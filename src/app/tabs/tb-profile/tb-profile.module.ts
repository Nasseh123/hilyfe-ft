import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbProfilePageRoutingModule } from './tb-profile-routing.module';

import { TbProfilePage } from './tb-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbProfilePageRoutingModule
  ],
  declarations: [TbProfilePage]
})
export class TbProfilePageModule {}
