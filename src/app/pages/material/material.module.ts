import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialPageRoutingModule } from './material-routing.module';

import { MaterialPage } from './material.page';
import { DemoMaterialModule } from 'src/app/material-module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialPageRoutingModule,
    TranslateModule.forChild(),
    DemoMaterialModule
  ],
  declarations: [MaterialPage]
})
export class MaterialPageModule {}
