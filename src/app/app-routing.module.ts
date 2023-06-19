import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{Tab1Page} from 'src/app/tab1/tab1.page'
import { DetallePage } from './tab1/detalle/detalle.page';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {path:'Tab1Page',component:Tab1Page
},
 {
   path:'detalle :idMeal', component:DetallePage
 },
 {
  path:"**",
  redirectTo:'tabs/tab1'

 },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]


})



export class AppRoutingModule {}
