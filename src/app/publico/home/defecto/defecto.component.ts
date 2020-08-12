import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../../../servicios/seguridad-.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-defecto',
  templateUrl: './defecto.component.html',
  styleUrls: ['./defecto.component.css']
})
export class DefectoComponent implements OnInit {

  isLogged: Boolean = false;
  rol: String = '1';

  suscripcion: Subscription

  constructor(private servicio: SeguridadService) { }

  ngOnInit(): void {
    this.suscripcion = this.servicio.getdataUsuario().subscribe(data => {
      this.isLogged = data.isLogged;
      this.rol = data.rol;
    });
  }
}