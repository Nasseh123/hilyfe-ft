import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbMenuPage } from './tb-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TbMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbMenuPageRoutingModule {}
