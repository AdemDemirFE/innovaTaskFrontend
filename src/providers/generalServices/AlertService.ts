import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private alertController: AlertController,
    private translate: TranslateService
  ) {}

  /**
   * Displays a simple alert with a title and message.
   * @param header - The title of the alert.
   * @param message - The message of the alert.
   */
  async presentAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: this.translate.instant(header),
      message: this.translate.instant(message),
      buttons: [
        {
          text: this.translate.instant('GENERAL.OK'),
        },
      ],
    });
    await alert.present();
  }

  /**
   * Displays a confirmation dialog.
   * @param header - The title of the dialog.
   * @param message - The message of the dialog.
   * @param okHandler - Function to execute if the OK button is clicked.
   * @param cancelHandler - Function to execute if the Cancel button is clicked (optional).
   */
  async presentConfirm(
    header: string,
    message: string,
    okHandler: () => void,
    cancelHandler?: () => void
  ): Promise<void> {
    const alert = await this.alertController.create({
      header: this.translate.instant(header),
      message: this.translate.instant(message),
      buttons: [
        {
          text: this.translate.instant('GENERAL.CANCEL'),
          role: 'cancel',
          handler: cancelHandler,
        },
        {
          text: this.translate.instant('GENERAL.OK'),
          handler: okHandler,
        },
      ],
    });
    await alert.present();
  }
}