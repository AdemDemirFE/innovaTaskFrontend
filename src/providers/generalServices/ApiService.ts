import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './LoadingService';
import { AlertService } from './AlertService';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private translate: TranslateService
  ) {}

  async get(endpoint: string, params: any = {}) {
    await this.loadingService.present();
    return this.http
      .get(endpoint, { params })
      .toPromise()
      .then((response: any) => {
        this.loadingService.dismiss();
        return response;
      })
      .catch(async (error) => {
        this.loadingService.dismiss();
        await this.handleError(error);
        throw error;
      });
  }

  async post(endpoint: string, body: any) {
    await this.loadingService.present();
    return this.http
      .post(endpoint, body)
      .toPromise()
      .then((response: any) => {
        this.loadingService.dismiss();
        return response;
      })
      .catch(async (error) => {
        this.loadingService.dismiss();
        await this.handleError(error);
        throw error;
      });
  }

  async put(endpoint: string, body: any) {
    await this.loadingService.present();
    return this.http
      .put(endpoint, body)
      .toPromise()
      .then((response: any) => {
        this.loadingService.dismiss();
        return response;
      })
      .catch(async (error) => {
        this.loadingService.dismiss();
        await this.handleError(error);
        throw error;
      });
  }

  async delete(endpoint: string, params: any = {}) {
    await this.loadingService.present();
    return this.http
      .delete(endpoint, { params })
      .toPromise()
      .then((response: any) => {
        this.loadingService.dismiss();
        return response;
      })
      .catch(async (error) => {
        this.loadingService.dismiss();
        await this.handleError(error);
        throw error;
      });
  }

  private async handleError(error: any): Promise<void> {
    const errorMessage = this.translate.instant('SERVISMESAJLAR.HATA');
    await this.alertService.presentConfirm(
      'Error',
      errorMessage,
      () => {},
      () => {}
    );
    console.error(error);
  }
}