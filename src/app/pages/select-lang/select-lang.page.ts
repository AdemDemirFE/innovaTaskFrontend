import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { Langs } from 'src/app/lang';
//import { account, GeneralSettings } from '../pages';
@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.page.html',
  styleUrls: ['./select-lang.page.scss'],
})
export class SelectLangPage implements OnInit {

  languages = Langs;
  type = 0;
  //account = account;
  //settings = GeneralSettings;
  constructor(
    private navController: NavController,
    private route: ActivatedRoute,
    private translate: TranslateService,
    public menuCtrl: MenuController
  ) {
    this.route.queryParams.subscribe(params => {
      this.type = params["type"];

    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  backButtonTapped() {
    if (this.type == 1) {
      this.navController.navigateBack("/tabs/tabs/tab1")
    }
  }

  changeLanguage(code: any) {

    this.translate.setDefaultLang(code);
    this.translate.use(code);
    localStorage.setItem('selectLang', code);
    //this.settings.dil = code;
    if (code === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    if (this.type == 1) {
      this.navController.back();
    } if (this.type == 2) {
      this.navController.back();
    } else {
      this.navController.navigateForward("/login");
    }
  }

}
