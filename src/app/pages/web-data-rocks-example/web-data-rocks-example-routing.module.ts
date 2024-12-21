import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebDataRocksExamplePage } from './web-data-rocks-example.page';

const routes: Routes = [
  {
    path: '',
    component: WebDataRocksExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebDataRocksExamplePageRoutingModule {}
