import { Component, OnInit } from '@angular/core';
import { ComidasService } from 'src/app/services/comidas.service';
import { Comida } from 'src/app/interfaces/intefaces';
import { register } from 'swiper/element/bundle';
import { AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


register();
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})

export class DetallePage implements OnInit {

ngOnInit() {
       }
constructor() {}



}
