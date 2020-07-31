import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IniciarComponent } from './iniciar/iniciar.component';
import { CerrarComponent } from './cerrar/cerrar.component';



@NgModule({
  declarations: [IniciarComponent, CerrarComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
