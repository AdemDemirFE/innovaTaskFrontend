import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonelPageRoutingModule } from './personel-routing.module';

import { PersonelPage } from './personel.page';
import { DemoMaterialModule } from 'src/app/material-module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonelPageRoutingModule,
    TranslateModule.forChild(),
    DemoMaterialModule
  ],
  declarations: [PersonelPage]
})
export class PersonelPageModule {}
