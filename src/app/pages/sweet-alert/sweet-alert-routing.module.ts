import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SweetAlertPage } from './sweet-alert.page';

const routes: Routes = [
  {
    path: '',
    component: SweetAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SweetAlertPageRoutingModule {}
