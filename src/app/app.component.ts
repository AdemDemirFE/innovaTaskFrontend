import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/translate-config.service';
import { GeneralSettings } from './pages';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/providers/service/authService';
import { LoadingService } from 'src/providers/generalServices/LoadingService';
import { NotificationService } from 'src/providers/generalServices/NotificationService';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
  animations: [
    trigger('menuAnimation', [
      state('closed', style({
        transform: 'translateX(-100%)',
        opacity: 0.8
      })),
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('closed => open', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      transition('open => closed', [
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('overlayAnimation', [
      state('open', style({
        opacity: 0.5
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('closed => open', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      transition('open => closed', [
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class AppComponent {
  selectedLanguage: string;
  code = GeneralSettings.lang;
  menuState: 'open' | 'closed' = 'closed';

  menuItems = [
    { nameKey: 'MENU.HOME', url: '/home', icon: 'home' },
    { nameKey: 'MENU.PROFILE', url: '/profile', icon: 'person' },
    { nameKey: 'MENU.ABOUT_ME', url: '/about-me', icon: 'person' },
    { nameKey: 'MENU.APP_INFO', url: '/app-info', icon: 'information-circle' },
  ];

  translatedMenuItems: any[] = [];

  constructor(
    public translateService: TranslateService,
    public translateConfigService: TranslateConfigService,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,
    private loadingService: LoadingService,
    private notificationService: NotificationService,
    private menuController: MenuController
  ) {
    this.translateService.setDefaultLang(this.code);
    this.translateService.use(this.code);
    localStorage.setItem('selectLang', this.code);

    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();

    // Menü çevirilerini yükle
    this.loadMenuTranslations();

  }

  onMenuWillOpen() {
    this.menuState = 'open';
  }

  onMenuWillClose() {
    this.menuState = 'closed';
  }
  
  async loadMenuTranslations() {
    this.translatedMenuItems = this.menuItems.map(item => ({
      ...item,
      name: this.translateService.instant(item.nameKey),
    }));
  }

  async goToPage(url: string) {
    await this.closeMenu();
    this.navCtrl.navigateForward(url);
  }

  async logout(): Promise<void> {
    await this.closeMenu();
    await this.loadingService.present(this.translateService.instant('GENERAL.PLEASE_WAIT'));

    try {
      await this.authService.logout();
      this.notificationService.showSuccess(this.translateService.instant('GENERAL.SUCCESSFUL'), 'middle');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
      this.notificationService.showError(this.translateService.instant('ERROR.ERROR'), 'top');
    } finally {
      await this.loadingService.dismiss();
    }
  }

  async closeMenu() {
    await this.menuController.close();
    this.menuState = 'closed';
  }
}
