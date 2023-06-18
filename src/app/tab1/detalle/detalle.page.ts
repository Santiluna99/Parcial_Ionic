import { Component, OnInit } from '@angular/core';
import { ComidasService } from 'src/app/services/comidas.service';
import { Comida } from 'src/app/interfaces/intefaces';
import { register } from 'swiper/element/bundle';
import { AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ComidaInfo, RespuestaComida } from 'src/app/interfaces/intefaces';
import { Tab1Page } from '../tab1.page';
register();
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})

export class DetallePage implements OnInit {
      arreglosComida:Comida[]=[];
      constructor(private comidasServices:ComidasService,private route: ActivatedRoute,private alertController: AlertController,private https: HttpClient) {}
       ngOnInit() {
        this.comidasServices.getInfo2
        // this.comidasServices.getComida().subscribe(respuestaApi=>{
        //   console.log("respuesta")
        //   console.log(respuestaApi)
        //   this.arreglosComida=respuestaApi.meals
          //this.mirarInfoComida

       // })
      }
      verInfoComida(idMeal:string){
        this.comidasServices.getInfoComida(idMeal).subscribe(async respuesta=>{
          console.log(respuesta)
          const alert = await this.alertController.create({
            header: 'funcionaa '+respuesta.idMeal,
            subHeader: (respuesta.strArea),
            message: respuesta.strCategory,

          });
          await alert.present();
        })
        }
      async mirarInfoComida(idMeal:string){
        this.comidasServices.getInfoComida(idMeal).subscribe(async respuesta=>{
          console.log("respuesta");
          console.log(respuesta);
          // const alert = await this.alertController.create({
          //   header: 'funciona '+respuesta.idMeal,
          //   subHeader: (respuesta.strArea),
          //   message: respuesta.strCategory,
          //   buttons:['ok']
          // });

          //await alert.present();
        });


        // return this.https.get<ComidaInfo>('https://themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal);
          }
      // async presentAlert() {
      //     const alert = await this.alertController.create({
      //       header: 'Hola',
      //       message: '¡Hola mundo!',
      //       buttons: ['OK']
      //     });

      //     await alert.present();
      //   }
}
