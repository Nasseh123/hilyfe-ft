import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbCartPage } from './tb-cart.page';

const routes: Routes = [
  {
    path: '',
    component: TbCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbCartPageRoutingModule {}
