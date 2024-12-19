import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings } from '../../pages';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'src/providers/service/authService';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  userName: any = "";
  email: any = "";
  password: any = "";
  passwordRepeat: any = "";
  showPassword: boolean = false;
  showPasswordReapat: boolean = false;
  constructor(
    private translate: TranslateService,
    public loadingController: LoadingController,
    public modalCtrl: ModalController,
    public service: Service,
    public c_Utils: C_Utils,
    public router : Router,
		private authService: AuthService,
    ) { 
      localStorage.setItem('token', '');
    }

  ngOnInit() {
   
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  togglePasswordRepeatVisibility() {
    this.showPasswordReapat = !this.showPasswordReapat;
  }
  

  async register() {
    this.translate.get(['REGISTER', 'ERROR', 'PLEASE_WAIT', 'GENERAL']).subscribe(async (values) => {
      const loading = await this.loadingController.create({
        message: values.PLEASE_WAIT,
      });
      await loading.present();
      try {
        const user = await this.authService.register({ email: this.email, password: this.password });
        console.log('User registered:', user);
        await loading.dismiss();
  
        this.c_Utils.getToast(values.REGISTER.REGISTER_SUCCESSFULY, 'middle', 3000, false, 'toast-success');
      } catch (error: any) {
        await loading.dismiss();
        this.c_Utils.getToast(values.GENERAL.SERVICE_ERROR, 'top', 3000, false, 'toastClass');
        console.error('Register error ------>', error.message);
      }
    });
  }

  login(){
    this.router.navigate(['/login']);
  }

  async close() {
    await this.modalCtrl.dismiss(null);
  }

}

