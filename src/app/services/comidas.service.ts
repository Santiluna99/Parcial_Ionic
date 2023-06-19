import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Comida, ComidaInfo, RespuestaComida } from '../interfaces/intefaces';
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
  constructor(private https:HttpClient,private route: ActivatedRoute) { }
  ngOnInit() {
    // return this.https.get<RespuestaComida>('https://themealdb.com/api/json/v1/1/search.php?f=b')
  }
  getComida(){
    return this.https.get<RespuestaComida>('https://themealdb.com/api/json/v1/1/search.php?f=b')
  }
  ///
  getInfoComida(idMeal:string){
    console.log('getinfo')
    return this.https.get<ComidaInfo>('https://themealdb.com/api/json/v1/1/lookup.php?i='+idMeal,this.options)

  }
getFiltro(letter:string){
  return this.https.get('https://themealdb.com/api/json/v1/1/search.php?f='+letter)
}
 getBusqueda(strMeal:any){
   return this.https.get<ComidaInfo>('https://themealdb.com/api/json/v1/1/search.php?s='+ strMeal)
 }
}
