import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./tb-home/tb-home.module').then(m => m.TbHomePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./tb-cart/tb-cart.module').then(m => m.TbCartPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./tb-profile/tb-profile.module').then(m => m.TbProfilePageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./tb-menu/tb-menu.module').then( m => m.TbMenuPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tb-home',
    loadChildren: () => import('./tb-home/tb-home.module').then( m => m.TbHomePageModule)
  },
  {
    path: 'tb-cart',
    loadChildren: () => import('./tb-cart/tb-cart.module').then( m => m.TbCartPageModule)
  },
  {
    path: 'tb-profile',
    loadChildren: () => import('./tb-profile/tb-profile.module').then( m => m.TbProfilePageModule)
  },
  {
    path: 'tb-menu',
    loadChildren: () => import('./tb-menu/tb-menu.module').then( m => m.TbMenuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
