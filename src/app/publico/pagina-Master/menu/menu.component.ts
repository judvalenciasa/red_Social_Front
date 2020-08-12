import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../../../servicios/seguridad-.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: Boolean = false;
  rol:String = '0';

  suscripcion: Subscription

  constructor(private servicio: SeguridadService) { }

  ngOnInit(): void {
    this.suscripcion = this.servicio.getdataUsuario().subscribe(data =>{
      this.isLogged = data.isLogged;
      this.rol = data.rol;
    });
  }
}
