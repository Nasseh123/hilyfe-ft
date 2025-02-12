import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHeroComponent } from './auth-hero/auth-hero.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { RegisterEmailConfirmationComponent } from './register/register-email-confirmation/register-email-confirmation.component';
import { LoginComponent } from './login/login.component';
import { LinkedAccountComponent } from './linked-account/linked-account.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


const routes: Routes = [

      {
        path: 'welcome',
        component:AuthHeroComponent
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'linked-account',
        component: LinkedAccountComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'otp-verification',
        component:OtpVerificationComponent
      },
      {
        path: 'password-reset',
        component:PasswordResetComponent
      },
      {
        path: 'register/email-confirmation',
        component: RegisterEmailConfirmationComponent
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
