import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'isidro';
  nombreUpper: string = 'ISIDRO';
  nombreCompleto: string = 'iSiDrO SoToCA';

  fecha: Date = new Date();

}
