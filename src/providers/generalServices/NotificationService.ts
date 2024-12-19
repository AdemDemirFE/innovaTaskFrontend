import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastController: ToastController,
    private platform: Platform,
    private translate: TranslateService
  ) {}

  private truncateMessage(message: string, length: number): string {
    return message.length > length ? message.substring(0, length) + '...' : message;
  }

  /**
   * Display a success message.
   * @param message The message to display.
   * @param position Optional position for the toast (top, bottom, or middle).
   */
  async showSuccess(message: string, position: 'top' | 'bottom' | 'middle' = 'top', maxLength: number = 150): Promise<void> {
    const truncatedMessage = this.truncateMessage(this.translate.instant(message), maxLength);
    const translatedHeader = this.translate.instant('GENERAL.SUCCESSFUL');

    const toast = await this.toastController.create({
      message: truncatedMessage,
      duration: 3000,
      header: translatedHeader,
      cssClass: 'toast-success',
      position,
      icon: 'checkmark-outline'
    });
    await toast.present();
  }

  /**
   * Display an informational message.
   * @param message The message to display.
   * @param position Optional position for the toast (top, bottom, or middle).
   */
  async showInfo(message: string, position: 'top' | 'bottom' | 'middle' = 'top', maxLength: number = 150): Promise<void> {
    const truncatedMessage = this.truncateMessage(this.translate.instant(message), maxLength);
    const translatedHeader = this.translate.instant('INFO');

    const toast = await this.toastController.create({
      message: truncatedMessage,
      duration: 3000,
      header: translatedHeader,
      cssClass: 'toast-info',
      position,
      icon: 'information-circle-outline'
    });
    await toast.present();
  }

  /**
   * Display an error message.
   * @param message The message to display.
   * @param position Optional position for the toast (top, bottom, or middle).
   */
  async showError(message: string, position: 'top' | 'bottom' | 'middle' = 'top', maxLength: number = 150): Promise<void> {
    const truncatedMessage = this.truncateMessage(this.translate.instant(message), maxLength);
    const translatedHeader = this.translate.instant('ERROR.ERROR');

    const toast = await this.toastController.create({
      message: truncatedMessage,
      duration: 3000,
      header: translatedHeader,
      cssClass: 'toast-error',
      position,
      icon: 'close-circle-outline'
    });
    await toast.present();
  }
}
