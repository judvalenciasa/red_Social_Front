import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComentarioComponent } from './comentario/listar-comentario/listar-comentario.component';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { BorrarComentarioComponent } from './comentario/borrar-comentario/borrar-comentario.component';
import { ListarConductorComponent } from './conductor/listar-conductor/listar-conductor.component';
import { CrearConductorComponent } from './conductor/crear-conductor/crear-conductor.component';
import { EditarConductorComponent } from './conductor/editar-conductor/editar-conductor.component';
import { BorrarConductorComponent } from './conductor/borrar-conductor/borrar-conductor.component';
import { ListarDenunciaComponent } from './denuncia/listar-denuncia/listar-denuncia.component';
import { CrearDenunciaComponent } from './denuncia/crear-denuncia/crear-denuncia.component';
import { EditarDenunciaComponent } from './denuncia/editar-denuncia/editar-denuncia.component'; 
import { BorrarDenunciaComponent } from './denuncia/borrar-denuncia/borrar-denuncia.component'; 
import { ListarEtiquetaComponent } from './etiqueta/listar-etiqueta/listar-etiqueta.component';
import { CrearEtiquetaComponent } from './etiqueta/crear-etiqueta/crear-etiqueta.component';
import { EditarEtiquetaComponent } from './etiqueta/editar-etiqueta/editar-etiqueta.component'; 
import { BorrarEtiquetaComponent } from './etiqueta/borrar-etiqueta/borrar-etiqueta.component';
import { ListarUsuarioComponent } from './Usuario/listar-Usuario/listar-Usuario.component';
import { CrearUsuarioComponent } from './Usuario/crear-Usuario/crear-Usuario.component';
import { EditarUsuarioComponent } from './Usuario/editar-Usuario/editar-Usuario.component'; 
import { BorrarUsuarioComponent } from './Usuario/borrar-Usuario/borrar-Usuario.component';
import { ListaViajeComponent } from './Viaje/lista-Viaje/lista-Viaje.component';
import { CrearViajeComponent } from './Viaje/crear-Viaje/crear-Viaje.component';
import { EditarViajeComponent } from './Viaje/editar-Viaje/editar-Viaje.component'; 
import { BorrarViajeComponent } from './Viaje/borrar-Viaje/borrar-Viaje.component';

const routes: Routes = [
  /**
   * Enrutamiento de los parametros del comentario
   */

  {
    path: 'comentario',
    component: ListarComentarioComponent
  },
  {
    path: 'crear-comentario',
    component: CrearComentarioComponent
  },
  {
    path: 'editar-comentario',
    component: EditarComentarioComponent
  },
  {
    path: 'borrar-comentario',
    component: BorrarComentarioComponent
  },

  /**
     * Enrutamiento de los parametros del conductor
     */

  {
    path: 'conductor',
    component: ListarConductorComponent
  },
  {
    path: 'crear-conductor',
    component: CrearConductorComponent
  },
  {
    path: 'editar-conductor',
    component: EditarConductorComponent
  },
  {
    path: 'borrar-conductor',
    component: BorrarConductorComponent
  },


  /**
   * enrutamiento de los parametros denuncia
   * 
   */

  {
    path: 'denuncia',
    component: ListarDenunciaComponent
  },
  {
    path: 'crear-denuncia',
    component: CrearDenunciaComponent
  },
  {
    path: 'editar-denuncia',
    component: EditarDenunciaComponent
  },
  {
    path: 'borrar-denuncia',
    component: BorrarDenunciaComponent
  },

  /**
   * enrutamiento de los parametros etiqueta
   * 
   */

  {
    path: 'etiqueta',
    component: ListarEtiquetaComponent
  },
  {
    path: 'crear-etiqueta',
    component: CrearEtiquetaComponent
  },
  {
    path: 'editar-etiqueta',
    component: EditarEtiquetaComponent
  },
  {
    path: 'borrar-etiqueta',
    component: BorrarEtiquetaComponent
  },
  
  /**
   * enrutamiento de los parametros usuario
   * 
   */

  {
    path: 'usuario',
    component: ListarUsuarioComponent
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent
  },
  {
    path: 'borrar-usuario',
    component: BorrarUsuarioComponent
  },
  /**
   * enrutamiento de los parametros usuario
   * Tener cuidado, en las otras rutas esta como listar, y a qui esta como lista
   */

  {
    path: 'viaje',
    component: ListaViajeComponent
  },
  {
    path: 'crear-viaje',
    component: CrearViajeComponent
  },
  {
    path: 'editar-viaje',
    component: EditarViajeComponent
  },
  {
    path: 'borrar-viaje',
    component: BorrarViajeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
