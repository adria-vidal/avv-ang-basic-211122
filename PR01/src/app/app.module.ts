// traemos todo lo que vamos a necesitar al módulo
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadoComponent } from './juego/dado/dado.component';
import { CalcComponent } from './calculadora/calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
