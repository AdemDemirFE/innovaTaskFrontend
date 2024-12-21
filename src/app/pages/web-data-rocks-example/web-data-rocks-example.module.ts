import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebDataRocksExamplePageRoutingModule } from './web-data-rocks-example-routing.module';

import { WebDataRocksExamplePage } from './web-data-rocks-example.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebDataRocksExamplePageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [WebDataRocksExamplePage]
})
export class WebDataRocksExamplePageModule {}
