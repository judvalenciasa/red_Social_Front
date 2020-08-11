import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarComponent } from './iniciar/iniciar.component';
import { CerrarComponent } from './cerrar/cerrar.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { NoAutenticadoUsuarioGuard } from '../../guardianes/no-autenticado-usuario.guard';
import { AutenticadoUsuarioGuard } from '../../guardianes/autenticado-usuario.guard';

const routes: Routes = [
  {
    path: 'iniciar',
    component: IniciarComponent,
    canActivate: [AutenticadoUsuarioGuard],
  },
  {
    path: 'cerrar',
    component: CerrarComponent,
  },
  {
    path: 'recuperar-clave',
    component: RecuperarClaveComponent,
  },
  {
    path: 'cambiar-clave',
    component: CambiarClaveComponent,
    canActivate: [NoAutenticadoUsuarioGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
