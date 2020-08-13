import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad-.service';
import { Router } from '@angular/router';
import { cambiarClave } from 'src/app/modelos/seguridad/cambiarClave.modelo';
import MD5 from 'crypto-js/md5';
declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

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
      claveAnterior: ['', [Validators.required]],
      claveNueva: ['', [Validators.required]]
    });
  }

  cambiarClave() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario invalido');
    } else {
      let model = this.obtenerReseteoClave();
      console.log(model);
      this.service.cambiarClave(model).subscribe(
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
  obtenerReseteoClave(): cambiarClave {
    let model = new cambiarClave();
    model.id= this.service.getUserId();
    model.clave = MD5(this.fgv.claveAnterior.value).toString();
    model.nuevaClave = MD5(this.fgv.claveNueva.value).toString();;
    console.log(model);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
