import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from '../../../../modelos/parametros/usuario.model';
import { UsuarioService } from '../../../../servicios/parametros/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  fgValidator: FormGroup;
  recordId: String = '';

  constructor(
    private fb: FormBuilder,
    private servicio: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

   /*Se ejecuta al inicio del componente*/
   ngOnInit(): void {
    this.crearFormulario();
    this.getUsuarioId();
  }

  /**
   * Obtiene el ususario identificado con el id
   */
  getUsuarioId() {
    this.servicio.obtenerRegistroId(this.recordId).subscribe(
      data =>{
        this.fgv.id.setValue(this.recordId);
        this.fgv.primer_Nombre.setValue(data.primer_Nombre);
        this.fgv.segundo_Nombre.setValue(data.segundo_Nombre);
        this.fgv.primer_Apellido.setValue(data.primer_Apellido);
        this.fgv.segundo_Apellido.setValue(data.segundo_Apellido);
        this.fgv.cedula.setValue(data.cedula);
        this.fgv.celular.setValue(data.celular);
        this.fgv.correo.setValue(data.correo);
        this.fgv.fecha_Nacimiento.setValue(data.fecha_Nacimiento);
        this.fgv.foto_Cedula.setValue(data.foto_Cedula);
        this.fgv.foto_Personal.setValue(data.foto_Personal);
        this.fgv.rol.setValue(data.rol);
      },
      error => {
        ShowNotificationMessage('Error al mostrar la información');
        this.router.navigate(['parametros/usuario']);
      }
    );
  }

  crearFormulario()
  {
    this.fgValidator = this.fb.group({

      id: ['',[Validators.required]],
      primer_Nombre: ['',[Validators.required, Validators.minLength(2)]],
      segundo_Nombre: [],
      primer_Apellido: ['',[Validators.required, Validators.minLength(2)]],
      segundo_Apellido: [],
      cedula: ['',[Validators.required, Validators.minLength(7), Validators.maxLength(11)]],
      celular: ['',[Validators.required, Validators.maxLength(10)]],
      correo: ['',[Validators.required, Validators.email]],
      fecha_Nacimiento: ['',[Validators.required]],
      foto_Cedula: [],
      foto_Personal: [],
      rol: ['',[Validators.required]]
      
    });
  }

  editarUsuario()
  {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario invalido');
    }
    else {
      let modelo = this.getUsuariosData();
      this.servicio.editarRegistro(modelo).subscribe(
        data => {
          ShowNotificationMessage('Actualización Exitosa');
          this.router.navigate(['parametros/usuario']);
        },
        error => {
          ShowNotificationMessage('Error en la Actualización');
        });
    }
  }

  /* Crear una instancia del modelo para ser enviada */
  getUsuariosData(): UsuarioModel
  {
    let modelo = new UsuarioModel();
    modelo.id = this.fgv.id.value;
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
    modelo.rol = this.fgv.rol.value;
    return modelo;
  }

  get fgv()
  {
    return this.fgValidator.controls;
  }
} 
