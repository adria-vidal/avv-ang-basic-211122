import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  primeros: Array<number> = [1, 2, 3];
  segundos: Array<number> = [4, 5, 6];
  terceros: Array<number> = [7, 8, 9];
  n1: number = 0;
  n2: number = 0;
  op: string = '';

  constructor() {}
  getOperador(op:string):void {
    if (this.op === null) {
      this.op = op;
      return;
  }

  calcular(n1: number, n2: number, op: string): number {
    let resultado: number;
    switch (this.op) {
      case '+':
        resultado = n1 - n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case 'x':
        resultado = n1 * n2;
        break;
      case '/':
        resultado = n1 / n2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }
}
