import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodePageRoutingModule } from './barcode-routing.module';

import { BarcodePage } from './barcode.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [BarcodePage]
})
export class BarcodePageModule {}
