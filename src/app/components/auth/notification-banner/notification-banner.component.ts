import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { ProductCardComponent } from '../../home/shared/product-card/product-card.component';
import { SearchInputComponent } from '../../home/shared/search-input/search-input.component';
import { HlNotificationToastComponent } from '../../home/shared/hl-notification-toast/hl-notification-toast.component';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss'],
  standalone: true,
  imports: [IonicModule,LayoutComponent,ProductCardComponent,SearchInputComponent,HlNotificationToastComponent],
})
export class NotificationBannerComponent   {

  showToast = false;
  toastButtons = [
    {
      text: 'x',
      role: 'cancel'
    }
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.showToast = true;
    }, 3000);
  }
}
