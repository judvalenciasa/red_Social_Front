import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarComponent} from './iniciar/iniciar.component';
import { CerrarComponent } from './cerrar/cerrar.component';
import { RecuperarClaveComponent} from './recuperar-clave/recuperar-clave.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';

const routes: Routes = [
  {
    path:'iniciar',
    component:IniciarComponent
  },
  {
    path:'cerrar',
    component:CerrarComponent
  },
  {
    path:'recuperar-clave',
    component:RecuperarClaveComponent
  },
  {
    path:'cambiar-clave',
    component:CambiarClaveComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
