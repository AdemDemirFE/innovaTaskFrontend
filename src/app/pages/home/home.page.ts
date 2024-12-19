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

  // @ViewChild('slideWithNav', { static: false }) slideWithNav: IonicSlides | undefined;
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1.1,
    autoplay: true,

  };

  constructor(
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private navController: NavController,
    public translateService: TranslateService,
    public actionSheetCtrl: ActionSheetController,
    public loadingController: LoadingController,
    public platform: Platform,
    public menu: MenuController,
    public http: HttpClient,
    public router: Router
  ) {
  }
  ngOnInit() {
  }
  
  ionViewDidEnter() {
    
  }
  
  openActionSheet() {

  }
  usefulInformationDetail() {

  }

  goToPage() {
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

  //Move to previous slide
  slidePrev(object:any, slideView:any) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object:any, slideView:any) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
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
