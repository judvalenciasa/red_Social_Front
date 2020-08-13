import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from '../../../servicios/seguridad-.service'
import { recuperarContraseña } from 'src/app/modelos/seguridad/recuperarContraseña';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare const ShowNotificationMessage: any;
@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css'],
})
export class RecuperarClaveComponent implements OnInit {
  fgValidator: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: SeguridadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario() {
    this.fgValidator = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      type: ['', [Validators.required]]
    });
  }

  recuperarClave() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario invalido');
    } else {
      let model = this.obtenerReseteoClave();
      this.service.recuperarClave(model).subscribe(
        data => {
          ShowNotificationMessage('tu clave se ha reiniciado.');
          this.router.navigate(["/security/login"]);
        },
        err => {
          ShowNotificationMessage('Error procesando los datos.');
        }
      );
    }
  }

  /**
   *
   */
  obtenerReseteoClave(): recuperarContraseña {
    let model = new recuperarContraseña();
    model.correo = this.fgv.username.value;
    model.type = parseInt(this.fgv.type.value);
    console.log(model);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
