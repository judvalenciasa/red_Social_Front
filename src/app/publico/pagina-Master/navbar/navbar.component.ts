import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad-.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: Boolean = false;

  suscripcion: Subscription

  constructor(private servicio: SeguridadService) { }

  ngOnInit(): void {
    this.suscripcion = this.servicio.getdataUsuario().subscribe(data =>{
      this.isLogged = data.isLogged;
    });
  }

}
