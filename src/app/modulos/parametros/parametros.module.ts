import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { ListarComentarioComponent } from './comentario/listar-comentario/listar-comentario.component';
import { CrearConductorComponent } from './conductor/crear-conductor/crear-conductor.component';
import { EditarConductorComponent } from './conductor/editar-conductor/editar-conductor.component';
import { BorrarConductorComponent } from './conductor/borrar-conductor/borrar-conductor.component';
import { ListarConductorComponent } from './conductor/listar-conductor/listar-conductor.component';
import { CrearDenunciaComponent } from './denuncia/crear-denuncia/crear-denuncia.component';
import { EditarDenunciaComponent } from './denuncia/editar-denuncia/editar-denuncia.component';
import { ListarDenunciaComponent } from './denuncia/listar-denuncia/listar-denuncia.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { CrearPublicacionComponent } from './publicacion/crear-publicacion/crear-publicacion.component';
import { EditarPublicacionComponent } from './publicacion/editar-publicacion/editar-publicacion.component';
import { EliminarPublicacionComponent } from './publicacion/eliminar-publicacion/eliminar-publicacion.component';
import { CrearViajeComponent } from './viaje/crear-viaje/crear-viaje.component';
import { EditarViajeComponent } from './viaje/editar-viaje/editar-viaje.component';
import { EliminarViajeComponent } from './viaje/eliminar-viaje/eliminar-viaje.component';
import { CrearEtiquetaComponent } from './etiqueta/crear-etiqueta/crear-etiqueta.component';
import { EditarEtiquetaComponent } from './etiqueta/editar-etiqueta/editar-etiqueta.component';
import { EliminarEtiquetaComponent } from './etiqueta/eliminar-etiqueta/eliminar-etiqueta.component';
import { CrearMensajeComponent } from './mensaje/crear-mensaje/crear-mensaje.component';
import { EditarMensajeComponent } from './mensaje/editar-mensaje/editar-mensaje.component';
import { EliminarMensajeComponent } from './mensaje/eliminar-mensaje/eliminar-mensaje.component';
import { BorrarComentarioComponent } from './borrar-comentario/borrar-comentario.component';
import { BorrarDenunciaComponent } from './denuncia/borrar-denuncia/borrar-denuncia.component';
import { BorrarEtiquetaComponent } from './etiqueta/borrar-etiqueta/borrar-etiqueta.component';
import { ListarEtiquetaComponent } from './etiqueta/listar-etiqueta/listar-etiqueta.component';
import { BorrarMensajeComponent } from './mensaje/borrar-mensaje/borrar-mensaje.component';
import { BorrarPublicacionComponent } from './publicacion/borrar-publicacion/borrar-publicacion.component';
import { ListarPublicacionComponent } from './publicacion/listar-publicacion/listar-publicacion.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { BorrarUsuarioComponent } from './usuario/borrar-usuario/borrar-usuario.component';
import { BorrarViajeComponent } from './viaje/borrar-viaje/borrar-viaje.component';
import { ListaViajeComponent } from './viaje/lista-viaje/lista-viaje.component';


@NgModule({
  declarations: [CrearComentarioComponent, EditarComentarioComponent, ListarComentarioComponent, CrearConductorComponent, EditarConductorComponent, BorrarConductorComponent, ListarConductorComponent, CrearDenunciaComponent, EditarDenunciaComponent, ListarDenunciaComponent, CrearUsuarioComponent, EditarUsuarioComponent, EliminarUsuarioComponent, CrearPublicacionComponent, EditarPublicacionComponent, EliminarPublicacionComponent, CrearViajeComponent, EditarViajeComponent, EliminarViajeComponent, CrearEtiquetaComponent, EditarEtiquetaComponent, EliminarEtiquetaComponent, CrearMensajeComponent, EditarMensajeComponent, EliminarMensajeComponent, BorrarComentarioComponent, BorrarDenunciaComponent, BorrarEtiquetaComponent, ListarEtiquetaComponent, BorrarMensajeComponent, BorrarPublicacionComponent, ListarPublicacionComponent, ListarUsuarioComponent, BorrarUsuarioComponent, BorrarViajeComponent, ListaViajeComponent],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
