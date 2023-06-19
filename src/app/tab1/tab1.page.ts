import { Component, OnInit } from '@angular/core';
import { ComidasService } from '../services/comidas.service';
import { Comida } from '../interfaces/intefaces';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute } from '@angular/router';
import { AlertController} from '@ionic/angular';
register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  arregloComida:Comida[]=[];
  arregloLetra=['a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  constructor(private comidasServices:ComidasService,
    private route: ActivatedRoute,
    private alertController: AlertController) {

  }
  async ngOnInit() {
    this.comidasServices.getComida().subscribe(respuesta=>{
      console.log(respuesta)
      this.arregloComida=respuesta.meals
    })

  }

Filtro(letter:string){
console.log(letter)
this.comidasServices.getFiltro(letter).subscribe((respuesta:any)=>{
  this.arregloComida=respuesta.meals
  console.log(respuesta)
  console.log('entrando filtro')

})

}
async verInfoComida(idMeal: string) {
  this.comidasServices.getInfoComida(idMeal).subscribe(async respuestaApi =>{
    console.log(respuestaApi)
    console.log('entrando a la infopeli')
    const alert = await this.alertController.create({
      header: respuestaApi.idMeal,
      subHeader: respuestaApi.strMeal,
      message: respuestaApi.strYoutube,

    });
    await alert.present();
  })
}
}




//  verInfoComida(idMeal:string){
//  this.comidasServices.getInfoComida(idMeal).subscribe(async respuesta=>{
//    console.log(respuesta)
//     const alert = await this.alertController.create({
//       header: 'funcionaa '+respuesta.idMeal,
//       subHeader: (respuesta.strArea),
//       message: respuesta.strCategory,

//     });
//     await alert.present();
//  })
//  }
