import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatGPTPageRoutingModule } from './chat-gpt-routing.module';

import { ChatGPTPage } from './chat-gpt.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatGPTPageRoutingModule,
    TranslateModule
  ],
  declarations: [ChatGPTPage]
})
export class ChatGPTPageModule {}
