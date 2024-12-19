import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading = false;

  constructor(private loadingController: LoadingController) {}

  async present(message: string = 'Loading...'): Promise<void> {
    this.isLoading = true;
    const loading = await this.loadingController.create({
      message,
      spinner: 'circles',
    });

    await loading.present();

    if (!this.isLoading) {
      await loading.dismiss();
    }
  }

  async dismiss(): Promise<void> {
    this.isLoading = false;
    await this.loadingController.dismiss().catch((error) => {
      console.error('Loading dismiss error:', error);
    });
  }
}