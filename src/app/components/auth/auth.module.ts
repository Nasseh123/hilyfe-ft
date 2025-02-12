import { AppRoutingModule } from './../../app-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';


import { LoginComponent } from './login/login.component';
import { AuthHeroComponent } from './auth-hero/auth-hero.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent,],
})
export class AuthModule {}
