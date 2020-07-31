import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefectoComponent } from './publico/home/defecto/defecto.component';

const routes: Routes = [
  {
    path:'home',
    pathMatch: 'full',
    component:DefectoComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  },

/**
 * Esta opcion siempre debe estar al final, por seguridad
 */
  {
    path:'**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
