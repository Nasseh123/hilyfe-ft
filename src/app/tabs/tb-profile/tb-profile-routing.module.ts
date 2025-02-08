import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbProfilePage } from './tb-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TbProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbProfilePageRoutingModule {}
