import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PR01';
  nombre:string = 'Adria';
  apellido: string = 'Vidal';
  salario: number = 1550;
  activo:boolean = true;
  mensaje:string = '';
  
  isActive(){
    if (this.activo) {
      this.mensaje = "El usuario ya tiene trabajo"
    }
    return this.mensaje;
  }
}
