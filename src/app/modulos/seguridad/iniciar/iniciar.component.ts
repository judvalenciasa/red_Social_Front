import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from '../../../servicios/seguridad-.service'

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: SeguridadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

   /*Se ejecuta al inicio del componente*/
   ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario()
  {
    this.fgValidator = this.fb.group({
      correo: ['',[Validators.required, Validators.email]],
      clave: ['',[Validators.required]]
    });
  }
  get fgv() {
    return this.fgValidator.controls;
  }

}
