import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IniciarComponent } from './iniciar/iniciar.component';
import { CerrarComponent } from './cerrar/cerrar.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';



@NgModule({
  declarations: [IniciarComponent, CerrarComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SeguridadModule { }
