import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from '../../../servicios/seguridad-.service'
import { inicioModel } from 'src/app/modelos/iniciar.model';
import MD5 from 'crypto-js/md5';

//declare const ShowNotificationMessage: any;
/**
 * constante utilizada para los mensajes de validacion
 */
declare const ShowNotificationMessage: any;
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
  ) { }

  /*Se ejecuta al inicio del componente*/
  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.fgValidator = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  /* Crear una instancia del modelo para ser enviada */
  getDatosInicio(): inicioModel {
    let modelo = new inicioModel();
    modelo.correo = this.fgv.correo.value;
    modelo.password = MD5(this.fgv.password.value).toString();
   // modelo.password = this.fgv.password.value;
    return modelo;
  }

  inicioUsuario() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario invalido');
    }
    else {
      //alert(JSON.stringify(this.fgValidator.value, null, 4));
      let modelo = this.getDatosInicio();
      console.log(modelo);

      this.servicio.inicioUsuario(modelo).subscribe(data => {
        if (data) {
          ShowNotificationMessage('ingreso valido');
          this.router.navigate(['/seguridad/iniciar']);
        }
        else {
          ShowNotificationMessage('Error al ingresar');
        }
      });
    }
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}

