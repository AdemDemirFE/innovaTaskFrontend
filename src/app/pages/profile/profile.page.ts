import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/providers/service/authService';
import { LoadingService } from 'src/providers/generalServices/LoadingService';
import { NotificationService } from 'src/providers/generalServices/NotificationService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user: any = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private notificationService: NotificationService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const currentUser = this.authService.getUser();
    if (currentUser) {
      this.user = {
        email: currentUser.email,
        uid: currentUser.uid,
        emailVerified: currentUser.emailVerified,
        lastLoginAt: currentUser.metadata.lastSignInTime,
        createdAt: currentUser.metadata.creationTime,
      };
    } else {
      this.notificationService.showError(
        this.translate.instant('LOGIN.LOGIN_FAILED'),
        'top'
      );
      this.router.navigate(['/login']);
    }
  }

  async logout() {
    await this.loadingService.present(this.translate.instant('GENERAL.PLEASE_WAIT'));

    try {
      await this.authService.logout();
      this.notificationService.showSuccess(
        this.translate.instant('GENERAL.SUCCESSFUL'),
        'middle'
      );
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
      this.notificationService.showError(
        this.translate.instant('ERROR.ERROR'),
        'top'
      );
    } finally {
      await this.loadingService.dismiss();
    }
  }
}
