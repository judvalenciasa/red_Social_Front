import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionModel } from '../../../../modelos/parametros/publicacion.model';
import { PublicacionService } from '../../../../servicios/parametros/publicacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from '../../../../servicios/seguridad-.service';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  fgValidator: FormGroup;
  uploadForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: PublicacionService,
    private servicioSeguridad: SeguridadService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /*Se ejecuta al inicio del componente*/
  ngOnInit(): void {
    this.FormUploadBuilding();
    this.crearFormulario();
  }

  crearFormulario() {
    this.fgValidator = this.fb.group({

      fecha: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      destino: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      foto: ['', [Validators.required]]
    });
  }

  registrarPublicacion() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario invalido');
    }
    else {
      let modelo = this.getPublicacionData();
      console.log(modelo);
      this.servicio.guardarRegistroNuevo(modelo).subscribe(data => {
        if (data) {
          ShowNotificationMessage('registro exitoso');
          this.router.navigate(['parametros/publicacion']);
        }
        else {
          ShowNotificationMessage('Error en el registro');
        }
      });
    }
  }

  /* Crear una instancia del modelo para ser enviada */
  getPublicacionData(): PublicacionModel {
    let modelo = new PublicacionModel();
    modelo.fecha = this.fgv.fecha.value;
    modelo.origen = this.fgv.origen.value;
    modelo.destino = this.fgv.destino.value;
    modelo.lugar = this.fgv.lugar.value;
    modelo.precio = this.fgv.precio.value;
    modelo.foto = this.fgv.foto.value;
    modelo.id_Usuario = this.servicioSeguridad.getUserId();

    return modelo;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

  get fgUpload() {
    return this.uploadForm.controls;
  }

  FormUploadBuilding() {
    this.uploadForm = this.fb.group({
      foto_Publicacion: ['', Validators.required]
    });
  }

  subirImagenPublicacion() {
    const formData = new FormData();
    formData.append('file', this.fgUpload.foto_Publicacion.value);
    this.servicio.subirImagenPUblicacion(formData).subscribe(
      data => {
        this.fgv.foto.setValue(data.filename);
        ShowNotificationMessage("La imagen se ha subido satisfactoriamente.");
      },
      err => {
        ShowNotificationMessage("Error subiendo imagen.");
      }
    );
  }

  onPublicacionPhoto(event) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.fgUpload.foto_Publicacion.setValue(f);
      this.subirImagenPublicacion();
    }
  }

} 
