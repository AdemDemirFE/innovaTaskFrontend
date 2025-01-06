import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SweetAlertPageRoutingModule } from './sweet-alert-routing.module';

import { SweetAlertPage } from './sweet-alert.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SweetAlertPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SweetAlertPage]
})
export class SweetAlertPageModule {}
