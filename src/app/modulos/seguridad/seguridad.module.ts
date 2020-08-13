import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IniciarComponent } from './iniciar/iniciar.component';
import { CerrarComponent } from './cerrar/cerrar.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component'
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component'



@NgModule({
  declarations: [IniciarComponent, CerrarComponent, RecuperarClaveComponent, CambiarClaveComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SeguridadModule { }
