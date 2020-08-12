import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefectoComponent } from './publico/home/defecto/defecto.component';
import { ConocenosComponent } from './publico/pagina-Master/conocenos/conocenos.component';
import { AutenticadoAdminGuard } from './guardianes/autenticado-admin.guard';


const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: DefectoComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'conocenos',
    pathMatch: 'full',
    component: ConocenosComponent,
  },
  {
    path: 'seguridad',
    loadChildren: () =>
      import('./modulos/seguridad/seguridad.module').then(
        (m) => m.SeguridadModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modulos/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },
  {
    path: 'parametros',
    loadChildren: () =>
      import('./modulos/parametros/parametros.module').then(
        (m) => m.ParametrosModule
      ),
    //canActivate:[AutenticadoAdminGuard]
  },

  /**
   * Esta opcion siempre debe estar al final, por seguridad
   */
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
