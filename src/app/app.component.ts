import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/translate-config.service';
import { GeneralSettings } from './pages';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  
  selectedLanguage:string;
  code = GeneralSettings.lang;

  menuItems = [
    { name: 'Home', url: '/home', icon: 'home' },
    { name: 'Profile', url: '/profile', icon: 'person' },
    { name: 'About Me', url: '/about-me', icon: 'person' },
    { name: 'App Info', url: '/app-info', icon: 'information-circle' },
  ];

  constructor(
    public translateService: TranslateService,
    public translateConfigService: TranslateConfigService,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.translateService.setDefaultLang(this.code);
    this.translateService.use(this.code);
    localStorage.setItem('selectLang', this.code);

    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  goToPage(url: string) {
    this.navCtrl.navigateForward(url);
  }


}
