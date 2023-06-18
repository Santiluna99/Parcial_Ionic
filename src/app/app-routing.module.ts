import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{Tab1Page} from 'src/app/tab1/tab1.page'
import { DetallePage } from './tab1/detalle/detalle.page';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'info-comida',
    loadChildren: () => import('./pages/info-comida/info-comida.module').then( m => m.InfoComidaPageModule)
  },
  {path:'Tab1Page',component:Tab1Page
},
// {
//   path:'detalle :idMeal', component:DetallePage
// }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]


})



export class AppRoutingModule {}
