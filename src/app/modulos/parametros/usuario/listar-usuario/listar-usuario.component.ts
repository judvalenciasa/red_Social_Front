import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../servicios/parametros/usuario.service';
import { UsuarioModel } from '../../../../modelos/parametros/usuario.model';
import { ServiciosConfig } from '../../../../config/servicios.config';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  itemsPorPagina: number = ServiciosConfig.ITEMS_POR_PAGINA; 
  page: number = 1;
  listaRegistro: UsuarioModel[];

  constructor(
    private servicio: UsuarioService
  ) { }

  ngOnInit(): void {
    this.obtenerListaRegistros();
  }

  obtenerListaRegistros()
  {
    this.servicio.obtenerRegistros().subscribe(
      records => {
        this.listaRegistro = records;
        console.log(this.listaRegistro);
      },
      error => {
        ShowNotificationMessage("Hay un problema con la comunicacion del backend");
      }
    )
  }
}
