import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Manolo';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.splice(0, 1);
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Isidro',
    edad: 35,
    direccion: 'Tavernes de la Valldigna, Valencia'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval(5000); // 0,1,2,3,4,etc

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    });

  });

}
