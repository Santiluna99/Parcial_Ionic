import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Comida, ComidaInfo, RespuestaComida } from '../interfaces/intefaces';
import { AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ComidasService implements OnInit{
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };
  constructor(private https:HttpClient,private route: ActivatedRoute,private alertController: AlertController) { }
  ngOnInit() {
    // return this.https.get<RespuestaComida>('https://themealdb.com/api/json/v1/1/search.php?f=b')
  }
  getComida(){
    return this.https.get<RespuestaComida>('https://themealdb.com/api/json/v1/1/search.php?f=b')
  }
  ///
  getInfoComida(idMeal:string){
    console.log('getinfo')
    return this.https.get<ComidaInfo>('https://themealdb.com/api/json/v1/1/lookup.php?i='+idMeal+this.options)
  }

  getInfo2(idMeal:string){
    this.getInfoComida(idMeal).subscribe(respuesta=>{
      console.log("ver Si entra")
    })

    return this.https.get<ComidaInfo>('https://themealdb.com/api/json/v1/1/lookup.php?i='+idMeal+this.options)
  }
getFiltro(letter:string){
  return this.https.get('https://themealdb.com/api/json/v1/1/search.php?f='+letter)
}
getBusqueda(strMeal:any):Observable<ComidaInfo[]>{
  return this.https.get<ComidaInfo[]>('https://themealdb.com/api/json/v1/1/search.php?s='+ strMeal)
}
}
