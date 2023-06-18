import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaComida } from '../../interfaces/intefaces';
import { ComidasService } from 'src/app/services/comidas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-comida',
  templateUrl: './info-comida.page.html',
  styleUrls: ['./info-comida.page.scss'],
})
export class InfoComidaPage implements OnInit {

  constructor(private https:HttpClient,private comidasServices:ComidasService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id); // Imprime el valor del parámetro "id" en la consola

      });
  }
  // getInfoComida(idMeal:string){
  //   return this.https.get<RespuestaComida>('https://themealdb.com/api/json/v1/1/lookup.php?i='+idMeal)
  // }
  verInfoComida(idMeal:string){
    this.comidasServices.getInfoComida(idMeal).subscribe(respuesta=>{
      console.log(respuesta)

    })
    }
}
