import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';

import {BorrarComentarioComponent } from './comentario/borrar-comentario/borrar-comentario.component';
import {CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import {EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import {ListarComentarioComponent } from './comentario/listar-comentario/listar-comentario.component';

import {BorrarConductorComponent } from './conductor/borrar-conductor/borrar-conductor.component';
import {CrearConductorComponent } from './conductor/crear-conductor/crear-conductor.component';
import {EditarConductorComponent } from './conductor/editar-conductor/editar-conductor.component';
import {ListarConductorComponent } from './conductor/listar-conductor/listar-conductor.component';

import {BorrarDenunciaComponent } from './denuncia/borrar-denuncia/borrar-denuncia.component';
import {CrearDenunciaComponent} from './denuncia/crear-denuncia/crear-denuncia.component';
import {EditarDenunciaComponent } from './denuncia/editar-denuncia/editar-denuncia.component';
import {ListarDenunciaComponent } from './denuncia/listar-denuncia/listar-denuncia.component';

import {BorrarEtiquetaComponent } from './etiqueta/borrar-etiqueta/borrar-etiqueta.component';
import {CrearEtiquetaComponent} from './etiqueta/crear-etiqueta/crear-etiqueta.component';
import {EditarEtiquetaComponent } from './etiqueta/editar-etiqueta/editar-etiqueta.component';
import {ListarEtiquetaComponent } from './etiqueta/listar-etiqueta/listar-etiqueta.component';

import {BorrarMensajeComponent } from './mensaje/borrar-mensaje/borrar-mensaje.component';
import {CrearMensajeComponent} from './mensaje/crear-mensaje/crear-mensaje.component';
import {EditarMensajeComponent} from './mensaje/editar-mensaje/editar-mensaje.component';
import {ListarMensajeComponent} from './mensaje/listar-mensaje/listar-mensaje.component';

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

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    BorrarComentarioComponent,
    CrearComentarioComponent,
    EditarComentarioComponent,
    ListarComentarioComponent,
    BorrarConductorComponent,
    CrearConductorComponent,
    EditarConductorComponent,
    ListarConductorComponent,
    BorrarDenunciaComponent,
    CrearDenunciaComponent,
    EditarDenunciaComponent,
    ListarDenunciaComponent,
    BorrarEtiquetaComponent,
    CrearEtiquetaComponent,
    EditarEtiquetaComponent,
    ListarEtiquetaComponent,
    BorrarMensajeComponent,
    CrearMensajeComponent,
    EditarMensajeComponent,
    ListarMensajeComponent,
    ListarPublicacionComponent,
    CrearPublicacionComponent,
    BorrarPublicacionComponent,
    EditarPublicacionComponent,
    ListarUsuarioComponent,
    BorrarUsuarioComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ListarViajeComponent,
    CrearViajeComponent,
    EditarViajeComponent,
    BorrarViajeComponent
    
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    NgxPaginationModule
  ]
})
export class ParametrosModule { }
