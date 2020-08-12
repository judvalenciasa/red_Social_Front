import { Component, OnInit } from '@angular/core';
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { PublicacionService } from 'src/app/servicios/parametros/publicacion.service';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-mostrar-publicacion',
  templateUrl: './mostrar-publicacion.component.html',
  styleUrls: ['./mostrar-publicacion.component.css']
})
export class MostrarPublicacionComponent implements OnInit {


  listaRegistro: PublicacionModel[];

  constructor(
    private servicio: PublicacionService,
  ) { }

  ngOnInit(): void {
    this.obtenerListaRegistros();
  }

  obtenerListaRegistros()
  {
    this.servicio.obtenerRegistros().subscribe(
      records => {
        this.listaRegistro = records;
        this.cambiarOrden();
        console.log(this.listaRegistro);
      },
      error => {
        ShowNotificationMessage("Hay un problema con la comunicacion del backend");
      }
    )
  }

  cambiarOrden()
  {
    this.listaRegistro.reverse();
  }
}
