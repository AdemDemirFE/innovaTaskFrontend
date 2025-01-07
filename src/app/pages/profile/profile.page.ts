import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/providers/service/authService';
import { LoadingService } from 'src/providers/generalServices/LoadingService';
import { NotificationService } from 'src/providers/generalServices/NotificationService';
import { TranslateService } from '@ngx-translate/core';
import { MenuController, Platform } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user: any = null;
  profileImage: string = 'assets/img/profil_avatar.png';

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private menuController: MenuController,
    private camera: Camera,
    private actionSheetController: ActionSheetController,
    private platform: Platform
  ) {
    this.loadUser();

  }

  ionViewDidEnter() {
    this.loadUser();
  }

  ngOnInit() {
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
    this.menuController.close();
  }

  async presentActionSheet() {
    let buttons = [];

    if (this.platform.is('ios') || this.platform.is('android')) {
      // Mobil platformlar için kamera ve galeri seçenekleri
      buttons = [
        {
          text: this.translate.instant('PROFILE.TAKE_PHOTO'),
          icon: 'camera',
          handler: () => {
            this.getImage(1);
          }
        },
        {
          text: this.translate.instant('PROFILE.CHOOSE_FROM_GALLERY'),
          icon: 'image',
          handler: () => {
            this.getImage(0);
          }
        }
      ];
    } else {
      // Web/Desktop platformları için dosya yükleme seçeneği
      buttons = [
        {
          text: this.translate.instant('PROFILE.CHOOSE_FILE'),
          icon: 'document',
          handler: () => {
            this.handleFileInput();
          }
        }
      ];
    }

    // İptal butonu her platformda olsun
    buttons.push({
      text: this.translate.instant('GENERAL.CANCEL'),
      icon: 'close',
      handler: () => {} // Added handler property to fix type error
    });

    const actionSheet = await this.actionSheetController.create({
      header: this.translate.instant('PROFILE.CHOOSE_PHOTO_SOURCE'),
      buttons: buttons
    });
    await actionSheet.present();
  }

  getImage(sourceType: number) {
    const options: CameraOptions = {
      quality: 90,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
      targetWidth: 500,
      targetHeight: 500
    };

    this.camera.getPicture(options).then((imageData) => {
      this.profileImage = 'data:image/jpeg;base64,' + imageData;
      // Burada image'i storage'a kaydetme işlemi yapılabilir
    }, (err) => {
      console.error('Error getting photo:', err);
      this.notificationService.showError(
        this.translate.instant('ERROR.PHOTO_ERROR'),
        'top'
      );
    });
  }

  // Web/Desktop için dosya yükleme metodu
  handleFileInput() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event: any) => {
        this.profileImage = event.target.result;
      };

      reader.readAsDataURL(file);
    };

    input.click();
  }
}
