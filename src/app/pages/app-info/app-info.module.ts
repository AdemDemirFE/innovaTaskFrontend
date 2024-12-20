import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppInfoPageRoutingModule } from './app-info-routing.module';

import { AppInfoPage } from './app-info.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppInfoPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AppInfoPage]
})
export class AppInfoPageModule {}
