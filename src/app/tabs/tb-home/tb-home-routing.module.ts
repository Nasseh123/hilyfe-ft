import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbHomePage } from './tb-home.page';

const routes: Routes = [
  {
    path: '',
    component: TbHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbHomePageRoutingModule {}
