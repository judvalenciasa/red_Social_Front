import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarComponent} from './iniciar/iniciar.component';
import { CerrarComponent } from './cerrar/cerrar.component';

const routes: Routes = [
  {
    path:'iniciar',
    component:IniciarComponent
  },
  {
    path:'cerrar',
    component:CerrarComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
