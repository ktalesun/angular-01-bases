import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{

    nombre: string = 'Iron Man';
    edad: Number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string{
        return `El heroe es ${this.nombre} y su edad es: ${this.edad}`
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 23;
    }

}