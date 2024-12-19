import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings } from '../../pages';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'src/providers/service/authService';

import { NotificationService } from 'src/providers/generalServices/NotificationService';
import { LoadingService } from 'src/providers/generalServices/LoadingService';
import { AlertService } from 'src/providers/generalServices/AlertService';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';
  passwordRepeat: string = '';
  showPassword: boolean = false;
  showPasswordRepeat: boolean = false;
  emailValid: boolean = true;
  passwordValid: boolean = true;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private authService: AuthService,
    private loadingService: LoadingService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordRepeatVisibility() {
    this.showPasswordRepeat = !this.showPasswordRepeat;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailValid = emailRegex.test(email);
    return this.emailValid;
  }

  validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&.,]{6,}$/;
    this.passwordValid = passwordRegex.test(password);
    return this.passwordValid;
  }

  async register() {
    if (!this.validateEmail(this.email) || !this.validatePassword(this.password)) {
      return;
    }

    const translatedTexts = await this.translate
      .get([
        'REGISTER.REGISTER_SUCCESSFULLY',
        'GENERAL.PLEASE_WAIT',
        'GENERAL.SERVICE_ERROR',
      ])
      .toPromise();

    await this.loadingService.present(translatedTexts['GENERAL.PLEASE_WAIT']);
    try {
      const user = await this.authService.register({
        email: this.email,
        password: this.password,
      });
      console.log('User registered:', user);

      this.notificationService.showSuccess(
        translatedTexts['REGISTER.REGISTER_SUCCESSFULLY'],
        'middle'
      );
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Register error:', error);
      this.notificationService.showError(
        translatedTexts['GENERAL.SERVICE_ERROR'],
        'top'
      );
    } finally {
      await this.loadingService.dismiss();
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
}