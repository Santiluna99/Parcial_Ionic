import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoComidaPageRoutingModule } from './info-comida-routing.module';

import { InfoComidaPage } from './info-comida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoComidaPageRoutingModule
  ],
  declarations: [InfoComidaPage]
})
export class InfoComidaPageModule {}
