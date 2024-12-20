import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonelPage } from './personel.page';

const routes: Routes = [
  {
    path: '',
    component: PersonelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonelPageRoutingModule {}
