import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad-.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.component.html',
  styleUrls: ['./cerrar.component.css']
})
export class CerrarComponent implements OnInit {

  constructor(private servicio: SeguridadService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.Cerrar();
    this.router.navigate(['/home'])
  }

}
