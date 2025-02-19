import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHeroComponent } from './auth-hero/auth-hero.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { RegisterEmailConfirmationComponent } from './register/register-email-confirmation/register-email-confirmation.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password/password-reset/password-reset.component';
import { HomeComponent } from './home/home.component';
import { PasswordChangeComponent } from './password/password-change/password-change.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { DiscountBannerComponent } from './discount-banner/discount-banner.component';
import { PromoBannerComponent } from './promo-banner/promo-banner.component';
import { PromoRunningComponent } from './promo-running/promo-running.component';
import { LocationComponent } from './location/location.component';
import { NotificationBannerComponent } from './notification-banner/notification-banner.component';
import { QuickSelectionComponent } from './quick-selection/quick-selection.component';


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
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'discount-banner',
        component: DiscountBannerComponent,
      },
      {
        path: 'promo-banner',
        component: PromoBannerComponent,
      },
      {
        path: 'promo-banner-running',
        component: PromoRunningComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
      },
      {
        path: 'product-rating',
        component: ProductRatingComponent,
      },
      {
        path: 'quick-selection',
        component: QuickSelectionComponent,
      },
      {
        path: 'notification-banner',
        component: NotificationBannerComponent,
      },
     
      {
        path: 'otp-verification',
        component:OtpVerificationComponent
      },
      {
        path: 'password-change',
        component: PasswordChangeComponent,
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
