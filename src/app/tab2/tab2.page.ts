import { Component } from '@angular/core';
import { ComidasService } from '../services/comidas.service';
import { Comida } from '../interfaces/intefaces';
import { ComidaInfo } from '../interfaces/intefaces';
import { ActivatedRoute } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

buscar(strMeal:any){
this.comidasServices.getBusqueda(strMeal.detail.value).subscribe(respuesta=>{
  console.log(respuesta)
  this.arregloComida = respuesta.meals;
  this.route.paramMap.subscribe(params => {
    const mostrar = params.get('mostrar');
    console.log(mostrar); // Imprime el valor del parámetro "id" en la consola

    });
})
}
arregloComida:ComidaInfo[]=[];
  constructor(private comidasServices:ComidasService,private route: ActivatedRoute) {}

}
