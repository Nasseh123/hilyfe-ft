import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHeroComponent } from './auth-hero/auth-hero.component';


const routes: Routes = [

      {
        path: 'welcome',
        component:AuthHeroComponent
      },
      {
        path: 'register',
        component:RegisterComponent
      },

      // {
      //   path: 'welcome',
      //   // loadChildren: () => import('./tb-home/tb-home.module').then(m => m.TbHomePageModule)
      // },

  
  
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
