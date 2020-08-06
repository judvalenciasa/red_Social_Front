import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosModel } from '../../../modelos/usuarios.model';
import { UsuariosService } from '../../../servicios/usuarios.service'
import { ActivatedRoute, Router } from '@angular/router';


//declare const ShowNotificationMessage: any;
/**
 * constante utilizada para los mensajes de validacion
 */
declare const ShowNotificationMessage:any;


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})


export class RegistroComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: UsuariosService,
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

      primer_Nombre: ['',[Validators.required, Validators.minLength(2)]],
      segundo_Nombre: [],
      primer_Apellido: ['',[Validators.required, Validators.minLength(2)]],
      segundo_Apellido: [],
      cedula: ['',[Validators.required, Validators.minLength(7), Validators.maxLength(11)]],
      celular: ['',[Validators.required, Validators.maxLength(10)]],
      correo: ['',[Validators.required, Validators.email]],
      fecha_Nacimiento: ['',[Validators.required]],
      foto_Cedula: [],
      foto_Personal: []

    });
  }

  registrarUsuario()
  {
    if (this.fgValidator.invalid) 
    {
      ShowNotificationMessage('Formulario invalido');
    }
    else 
    {
      //alert(JSON.stringify(this.fgValidator.value, null, 4));
      alert('valido');
      let modelo = this.getUsuariosData();
      //console.log(modelo);
      this.servicio.registrarUsuario(modelo).subscribe(data => {
        console.log(data);
        if (data) {
          ShowNotificationMessage('registro exitoso');
          this.router.navigate(['/seguridad/iniciar']);
        }
        else {
          ShowNotificationMessage('Error en el registro');
        }
      });
    }
  }

  /* Crear una instancia del modelo para ser enviada */
  getUsuariosData(): UsuariosModel
  {
    let modelo = new UsuariosModel();
    modelo.primer_Nombre = this.fgv.primer_Nombre.value;
    modelo.segundo_Nombre = this.fgv.segundo_Nombre.value;
    modelo.primer_Apellido = this.fgv.primer_Apellido.value;
    modelo.segundo_Apellido = this.fgv.segundo_Apellido.value;
    modelo.cedula = this.fgv.cedula.value;
    modelo.celular = this.fgv.celular.value;
    modelo.correo = this.fgv.correo.value;
    modelo.fecha_Nacimiento = this.fgv.fecha_Nacimiento.value;
    modelo.foto_Cedula = this.fgv.foto_Cedula.value;
    modelo.foto_Personal = this.fgv.foto_Personal.value;
    return modelo;
  }

  get fgv()
  {
    return this.fgValidator.controls;
  }
} 