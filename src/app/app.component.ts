import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/translate-config.service';
import { GeneralSettings } from './pages';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  
  selectedLanguage:string;
  menuItems: any = [];
  code = GeneralSettings.lang;

  constructor(
    public translateService: TranslateService,
    public translateConfigService: TranslateConfigService,
    public router: Router
  ) {
    this.translateService.setDefaultLang(this.code);
    this.translateService.use(this.code);
    localStorage.setItem('selectLang', this.code);

    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  ngOnInit(){

    this.menuItems = [
    {
      name: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      name: 'Profil',
      url: '/my-profile',
      icon: 'person'
    },
    {
      name: 'register',
      url: '/register',
      icon: 'person'
    },
    {
      name: 'about',
      url: '/about',
      icon: 'person'
    },
    {
      name: 'menu',
      url: '/menu-page',
      icon: 'person'
    },
    {
      name: 'İletişim',
      url: '/contac',
      icon: 'call'
    },
    ]
  }

}
