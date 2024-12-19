import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLangPageRoutingModule } from './select-lang-routing.module';

import { SelectLangPage } from './select-lang.page';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from "@angular/common/http";
import { createTranslateLoader } from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    SelectLangPageRoutingModule
  ],
  declarations: [SelectLangPage]
})
export class SelectLangPageModule {}
