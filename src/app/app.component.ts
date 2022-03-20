import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'IsiDro SoTocA';
  valor: number = 100000;
  obj: Object = {"nombre": 'Isidro'};

  mostrarNombre() {
    console.log(this.nombre)
  }

}
