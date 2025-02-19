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
export class NotificationBannerComponent  implements OnInit {

constructor(private toastController: ToastController) {}
  ngOnInit() {
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '🚀 Custom Styled Notification!',
      duration: 5000,
      position: 'top',
      cssClass: 'custom-toast', // Custom class for styling
      buttons: [
        {
          text: '✖',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
  

}
