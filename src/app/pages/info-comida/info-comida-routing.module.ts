import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComidaPage } from './info-comida.page';

const routes: Routes = [
  {
    path: '',
    component: InfoComidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoComidaPageRoutingModule {}
