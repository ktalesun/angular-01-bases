import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input('nuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0  }
  
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter;
  

  constructor(private dbzService: DbzService ){

  }
    
  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
      this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}