import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefectoComponent } from './publico/home/defecto/defecto.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component:DefectoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
