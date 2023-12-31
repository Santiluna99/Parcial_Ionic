import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: ':idMeal',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path:"**",
    redirectTo:'tabs/tab1'

   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
