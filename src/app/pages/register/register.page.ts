import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings } from '../../pages';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { Router } from '@angular/router';
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
    public router : Router
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
  
  register(){
    this.translate.get(['LOGIN', 'ERROR', 'PLEASE_WAIT', 'GENERAL']).subscribe(async values => {
      var loading = await this.loadingController.create({
        message: (values.PLEASE_WAIT)
      });
      await loading.present();

      let params = {
        "email": this.email,
        "langKey": GeneralSettings.lang,
        "login":  this.userName,
        "password": this.password,
      };
      // this.service.create( params, "register").toPromise().then(async (response) => {
      //   loading.dismiss();
      //   this.c_Utils.getToast(values.GENERAL.SAVE_SUCCESSFUL, 'middle', 3000, false, "toast-success");
      // }, 
      // (err) => {
      //   loading.dismiss();
      //   this.c_Utils.getToast(values.GENERAL.SERVICE_ERROR, 'top', 3000, false, "toastClass");
      //   console.error("register error ------>", JSON.stringify(err));
      // });
    });
  }

  login(){
    this.translate.get(['LOGIN']).subscribe(values => {
      this.router.navigate(['/login']);
      //this.close();
    });
  }

  async close() {
    await this.modalCtrl.dismiss(null);
  }

}

