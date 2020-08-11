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
import { ListarMensajeComponent } from './mensaje/listar-mensaje/listar-mensaje.component';
import { CrearMensajeComponent } from './mensaje/crear-mensaje/crear-mensaje.component';
import { EditarMensajeComponent } from './mensaje/editar-mensaje/editar-mensaje.component';
import { BorrarMensajeComponent } from './mensaje/borrar-mensaje/borrar-mensaje.component';
import { ListarPublicacionComponent } from './publicacion/listar-publicacion/listar-publicacion.component';
import { CrearPublicacionComponent } from './publicacion/crear-publicacion/crear-publicacion.component';
import { BorrarPublicacionComponent } from './publicacion/borrar-publicacion/borrar-publicacion.component';
import { EditarPublicacionComponent } from './publicacion/editar-publicacion/editar-publicacion.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { BorrarUsuarioComponent } from './usuario/borrar-usuario/borrar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ListarViajeComponent } from './viaje/listar-viaje/listar-viaje.component';
import { CrearViajeComponent } from './viaje/crear-viaje/crear-viaje.component';
import { EditarViajeComponent } from './viaje/editar-viaje/editar-viaje.component';
import { BorrarViajeComponent } from './viaje/borrar-viaje/borrar-viaje.component';

const routes: Routes = [
  /**
   * Enrutamiento de los parametros del comentario
   */

  {
    path: 'comentario',
    component: ListarComentarioComponent,
  },
  {
    path: 'crear-comentario',
    component: CrearComentarioComponent,
  },
  {
    path: 'editar-comentario/:id',
    component: EditarComentarioComponent,
  },
  {
    path: 'borrar-comentario',
    component: BorrarComentarioComponent,
  },

  /**
   * Enrutamiento de los parametros del conductor
   */

  {
    path: 'conductor',
    component: ListarConductorComponent,
  },
  {
    path: 'crear-conductor',
    component: CrearConductorComponent,
  },
  {
    path: 'editar-conductor/:id',
    component: EditarConductorComponent,
  },
  {
    path: 'borrar-conductor',
    component: BorrarConductorComponent,
  },

  /**
   * enrutamiento de los parametros denuncia
   *
   */

  {
    path: 'denuncia',
    component: ListarDenunciaComponent,
  },
  {
    path: 'crear-denuncia',
    component: CrearDenunciaComponent,
  },
  {
    path: 'editar-denuncia/:id',
    component: EditarDenunciaComponent,
  },
  {
    path: 'borrar-denuncia',
    component: BorrarDenunciaComponent,
  },

  /**
   * enrutamiento de los parametros etiqueta
   *
   */

  {
    path: 'etiqueta',
    component: ListarEtiquetaComponent,
  },
  {
    path: 'crear-etiqueta',
    component: CrearEtiquetaComponent,
  },
  {
    path: 'editar-etiqueta/:id',
    component: EditarEtiquetaComponent,
  },
  {
    path: 'borrar-etiqueta',
    component: BorrarEtiquetaComponent,
  },

  /**
   * enrutamiento de los parametros mensaje
   *
   */

  {
    path: 'mensaje',
    component: ListarMensajeComponent,
  },
  {
    path: 'crear-mensaje',
    component: CrearMensajeComponent,
  },
  {
    path: 'editar-mensaje/:id',
    component: EditarMensajeComponent,
  },
  {
    path: 'borrar-mensaje',
    component: BorrarMensajeComponent,
  },

  /**
   * enrutamiento de los parametros publicacion
   *
   */

  {
    path: 'publicacion',
    //component: ListarPublicacionComponent
    component: CrearPublicacionComponent,
  },
  {
    path: 'crear-publicacion',
    component: CrearPublicacionComponent,
  },
  {
    path: 'editar-publicacion/:id',
    component: EditarPublicacionComponent,
  },
  {
    path: 'borrar-publicacion',
    component: BorrarPublicacionComponent,
  },

  /**
   * enrutamiento de los parametros usuario
   *
   */

  {
    path: 'usuario',
    component: ListarUsuarioComponent,
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
  },
  {
    path: 'borrar-usuario',
    component: BorrarUsuarioComponent,
  },

  /**
   * enrutamiento de los parametros viaje
   *
   */

  {
    path: 'viaje',
    component: ListarViajeComponent,
  },
  {
    path: 'crear-viaje',
    component: CrearViajeComponent,
  },
  {
    path: 'editar-viaje/:id',
    component: EditarViajeComponent,
  },
  {
    path: 'borrar-viaje',
    component: BorrarUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosRoutingModule {}
