import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";



@Injectable()
export class DbzService{

    
  private _personajes : Personaje[] = [
    {
      nombre: 'Gokú',
      poder: 150000
    }
    ,
    {
      nombre: 'Vegueta',
      poder: 13000
    }
  ]


    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }



    constructor(){
        console.log('Servicio inicializado')
    }

}