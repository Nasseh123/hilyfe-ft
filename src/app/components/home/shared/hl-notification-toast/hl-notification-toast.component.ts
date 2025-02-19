import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hl-notification-toast',
  templateUrl: './hl-notification-toast.component.html',
  styleUrls: ['./hl-notification-toast.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class HlNotificationToastComponent  implements OnInit {

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'This is a toast that appears on page load.',
      duration: 3000,
      position: 'top', // Places the toast at the top
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

}
