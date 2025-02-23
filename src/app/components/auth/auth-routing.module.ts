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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddedCartComponent } from './added-cart/added-cart.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MoreComponent } from './more/more.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SecurityComponent } from './security/security.component';
import { TermsOfserviceComponent } from './terms-ofservice/terms-ofservice.component';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';
import { RefundPolicyComponent } from '../refund-policy/refund-policy.component';
import { EmptyreferalCodeComponent } from './emptyreferal-code/emptyreferal-code.component';
import { PresentreferalCodeComponent } from './presentreferal-code/presentreferal-code.component';
import { EmptyDiscountCodeComponent } from './empty-discount-code/empty-discount-code.component';
import { PresentDiscountCodeComponent } from './present-discount-code/present-discount-code.component';


const routes: Routes = [
  // auth routes

      {
        path: 'welcome',
        component:AuthHeroComponent
      },
      {
        path: 'register',
        component: RegisterComponent,
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
      {
        path: 'login',
        component: LoginComponent,
      },

      // homepage routes

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
        path: 'product-detail',
        component: ProductDetailComponent,
      },
      {
        path: 'added-to-cart',
        component: AddedCartComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },

    //  settings routes
    {
      path: 'more',
      component: MoreComponent,
    },
    {
      path: 'my-profile',
      component: MyProfileComponent,
    },
    {
      path: 'security',
      component: SecurityComponent,
    },
    {
      path: 'terms-of-service',
      component: TermsOfserviceComponent,
    },
    {
      path: 'data-privacy',
      component: DataPrivacyComponent,
    },
    {
      path: 'refund-policy',
      component: RefundPolicyComponent,
    },
    {
      path: 'referral-code-empty',
      component: EmptyreferalCodeComponent,
    },
    {
      path: 'referral-code-present',
      component: PresentreferalCodeComponent,
    },
    {
      path: 'empty-state-discount',
      component: EmptyDiscountCodeComponent,
    },
    {
      path: 'present-discount-code',
      component: PresentDiscountCodeComponent,
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
