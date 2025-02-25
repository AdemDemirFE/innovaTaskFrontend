import { Component, ViewChild } from '@angular/core';
import { MenuController, ModalController, NavController, ActionSheetController, LoadingController, Platform, IonInfiniteScroll } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage {

  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1.1,
    autoplay: true,

  };
  buttonList = [
    { id: 1, label: 'CAMERA.CAMERA', icon: 'camera', action: 'camera' },
    { id: 2, label: 'BARCODE_SCANNER.TITLE', icon: 'barcode', action: 'barcode' },
    { id: 3, label: 'PERSONNEL.PERSONNEL', icon: 'people', action: 'personnel' },
    { id: 4, label: 'CUSTOMER.TITLE', icon: 'grid', action: 'material' },
    { id: 5, label: 'Chart.js', icon: 'stats-chart', action: 'chart' },
    { id: 6, label: 'Webdatarocks', icon: 'stats-chart', action: 'web-data-rocks-example' },
    { id: 7, label: 'Sweet Alert', icon: 'checkmark-circle', action: 'sweet-alert' },
    { id: 7, label: 'CHAT Gpt', icon: 'checkmark-circle', action: 'chat-gpt' },

  ];
  constructor(
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public navController: NavController,
    public translateService: TranslateService,
    public actionSheetCtrl: ActionSheetController,
    public loadingController: LoadingController,
    public platform: Platform,
    public menu: MenuController,
    public http: HttpClient,
    public router: Router
  ) {
  }
  
  ionViewDidEnter() {
    
  }
  
  openActionSheet() {

  }
  usefulInformationDetail() {

  }

  goToPage(url: string) {
    this.navController.navigateForward(url);
  }

  executeAction(action: string) {
    const method = this[action as keyof HomePage];
    if (typeof method === 'function') {
      method.call(this);
    } else {
      console.error(`Method ${action} does not exist.`);
    }
  }

  goFood() {
    this.router.navigateByUrl('/food')
  }
  goShelter() {
    this.router.navigateByUrl('/shelter')
  }
  goDress() {
    this.router.navigateByUrl('/dress')
  }

  goWater() {
    this.router.navigateByUrl('/water-balance')
  }
  slideNext(object:any, slideView:any) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object:any, slideView:any) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  SlideDidChange(object:any, slideView:any) {
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object:any, slideView:any) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object:any, slideView:any) {
    slideView.isBeginning().then((istrue: any) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object:any, slideView:any) {
    slideView.isEnd().then((istrue: any) => {
      object.isEndSlide = istrue;
    });
  }
}
