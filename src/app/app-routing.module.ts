import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefectoComponent } from './publico/home/defecto/defecto.component';
<<<<<<< HEAD
import { ConocenosComponent } from './publico/pagina-Master/conocenos/conocenos.component';
import { AutenticadoAdminGuard } from './guardianes/autenticado-admin.guard';

=======
import { AutenticadoAdminGuard } from './guardianes/autenticado-admin.Guard';
>>>>>>> 33f6383d98f14d808b80c41b364b534b32d13fe8

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
<<<<<<< HEAD
    //canActivate:[AutenticadoAdminGuard]
=======
    canActivate: [AutenticadoAdminGuard],
>>>>>>> 33f6383d98f14d808b80c41b364b534b32d13fe8
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
