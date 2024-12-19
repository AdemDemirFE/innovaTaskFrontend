import { ActionSheetController, ModalController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Injectable } from "@angular/core";
import { LoadingController } from '@ionic/angular';

@Injectable()
export class C_Utils {
    loading: any;
    constructor(
        public toastCtrl: ToastController,
        public loadingController: LoadingController,
        public actionSheetCtrl: ActionSheetController,
        public modalController: ModalController,
    ) {

    }

    /**
     * @param message_ //Mesaj içeriği
     * @param position_ //alert konumu // top,bottom,middle
     * @param duration_ //ne kadar süre ekranda kalsın
     * @param showCloseButton_ //kapatma butonu olsun mu
     */
    async getToast(message_: string, position_: any, duration_: number, showCloseButton_: boolean, cssClass_: string) {
        let toast = await this.toastCtrl.create({
            message: message_,
            duration: duration_,
            position: position_,
            animated: false,
            cssClass: cssClass_,
        });

        toast.present();
    }

    /**
   * @param message_ //Mesaj içeriği
   * @param position_ //alert konumu // top,bottom,middle
   * @param duration_ //ne kadar süre ekranda kalsın
   * @param showCloseButton_ //kapatma butonu olsun mu
   *  @param color_ //default color
   */
    async getToast2(message_: string, position_: any, duration_: number, showCloseButton_: boolean, cssClass_: string, color_: string) {
        let toast = await this.toastCtrl.create({
            message: message_,
            duration: duration_,
            position: position_,
            animated: false,
            cssClass: cssClass_,
            color: color_
        });

        toast.present();
    }


    async presentLoading(_message: any) {
        this.loading = await this.loadingController.create({
            message: _message,
        });
        await this.loading.present();

    }

    async dismissLoading() {
        this.loading.dismiss();
    }


    /**
*
* @param buttons button event ve text oluşan array
* @param title  başlık
* @param subTitle altı başlık
*/
    openActionSheet(buttons: any, title: any, subTitle?: any) {
        let actionSheet = this.actionSheetCtrl.create({
            //header:title,
            //cssClass: 'action-sheets',
            buttons: buttons
        }).then(actionsheet => {
            actionsheet.present();
        });



    }
}