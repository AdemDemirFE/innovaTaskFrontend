import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelPageRoutingModule } from './personnel-routing.module';

import { PersonnelPage } from './personnel.page';
import { DemoMaterialModule } from 'src/app/material-module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelPageRoutingModule,
    TranslateModule.forChild(),
    DemoMaterialModule
  ],
  declarations: [PersonnelPage]
})
export class PersonnelPageModule {}
