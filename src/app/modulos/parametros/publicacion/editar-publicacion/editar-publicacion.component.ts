import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionModel } from '../../../../modelos/parametros/publicacion.model';
import { PublicacionService } from '../../../../servicios/parametros/publicacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from '../../../../servicios/seguridad-.service';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-publicacion',
  templateUrl: './editar-publicacion.component.html',
  styleUrls: ['./editar-publicacion.component.css']
})
export class EditarPublicacionComponent implements OnInit {

  fgValidator: FormGroup;
  recordId: String = '';

  constructor(
    private fb: FormBuilder,
    private servicio: PublicacionService,
    private servicioSeguridad : SeguridadService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

   /*Se ejecuta al inicio del componente*/
   ngOnInit(): void {
    this.crearFormulario();
    this.getPublicacionId();
  }

  getPublicacionId(){
    this.servicio.obtenerRegistroId(this.recordId).subscribe(
      data =>{
        this.fgv.id.setValue(this.recordId);
        this.fgv.fecha.setValue(data.fecha);
        this.fgv.origen.setValue(data.origen);
        this.fgv.destino.setValue(data.destino);
        this.fgv.lugar.setValue(data.lugar);
        this.fgv.precio.setValue(data.precio);
        this.fgv.foto.setValue(data.foto);
      },
      error => {
        ShowNotificationMessage('Error al mostrar la información');
        this.router.navigate(['parametros/publicacion']);
      }
    );
  }

  crearFormulario() {
    this.fgValidator = this.fb.group({

      id: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      destino: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      foto: ['', [Validators.required]]

    });
  }

  editarPublicacion()
  {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario invalido');
    }
    else {
      let modelo = this.getPublicacionData();
      this.servicio.editarRegistro(modelo).subscribe(
        data => {
          ShowNotificationMessage('Actualización Exitosa');
          this.router.navigate(['parametros/publicacion']);
        },
        error => {
          ShowNotificationMessage('Error en la Actualización');
        });
    }
  }

  /* Crear una instancia del modelo para ser enviada */
  getPublicacionData(): PublicacionModel
  {
    let modelo = new PublicacionModel();
    modelo.id = this.fgv.id.value;
    modelo.fecha = this.fgv.fecha.value;
    modelo.origen = this.fgv.origen.value;
    modelo.destino = this.fgv.destino.value;
    modelo.lugar = this.fgv.lugar.value;
    modelo.precio = this.fgv.precio.value;
    modelo.foto = this.fgv.foto.value;
    modelo.id_Usuario = this.servicioSeguridad.getUserId();
    
    return modelo;
  }

  get fgv()
  {
    return this.fgValidator.controls;
  }
} 