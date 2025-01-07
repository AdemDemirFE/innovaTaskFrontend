import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatGPTPage } from './chat-gpt.page';

const routes: Routes = [
  {
    path: '',
    component: ChatGPTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatGPTPageRoutingModule {}
