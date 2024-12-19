import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodePage } from './barcode.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodePageRoutingModule {}
