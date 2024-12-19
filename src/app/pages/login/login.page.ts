import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { C_Utils } from 'src/providers/utils';
import { Langs } from 'src/app/lang';
import { AuthService } from 'src/providers/service/authService';
import { NotificationService } from 'src/providers/generalServices/NotificationService';
import { LoadingService } from 'src/providers/generalServices/LoadingService';
import { AlertService } from 'src/providers/generalServices/AlertService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  appVersion = '1.0.0';
  userName: string = '';
  password: string = '';
  rememberMe: boolean = false;
  code = 'en';
  showPassword: boolean = false;

  languages = Langs;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private navCtrl: NavController,
    public http: HttpClient,
    public C_Utils: C_Utils
  ) {}

  ngOnInit() {
    // Dil seçimini kontrol et ve uygula
    const selectedLang = localStorage.getItem('selectLang') || 'en';
    this.changeLanguege(selectedLang);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async login() {
    if (this.userName.trim() === '' || this.password.trim() === '') {
      this.notificationService.showError(
        this.translateService.instant('LOGIN.EMPTY_FIELDS'),
        'top'
      );
      return;
    }

    await this.loadingService.present(this.translateService.instant('GENERAL.PLEASE_WAIT'));

    try {
      const user = await this.authService.login({
        email: this.userName,
        password: this.password,
      });
      console.log('User logged in:', user);

      this.notificationService.showSuccess(
        this.translateService.instant('LOGIN.LOGIN_SUCCESS'),
        'middle'
      );

      // Giriş başarılıysa yönlendirme
      this.navCtrl.navigateForward('/home');
    } catch (error: any) {
      console.error('Login error:', error);

      this.notificationService.showError(
        this.translateService.instant('LOGIN.LOGIN_FAILED'),
        'top'
      );

      await this.alertService.presentAlert(
        this.translateService.instant('LOGIN.LOGIN_FAILED'),
        this.translateService.instant('LOGIN.CHECK_CREDENTIALS')
      );
    } finally {
      await this.loadingService.dismiss();
    }
  }

  changeLanguege(langCode: string) {
    this.translateService.use(langCode);
    localStorage.setItem('selectLang', langCode);
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
  }

  register() {
    this.navCtrl.navigateForward('/register');
  }

  QRCode() {
    window.open('https://www.innova.com.tr', '_blank');
  }
}