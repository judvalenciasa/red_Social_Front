import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionService } from 'src/app/servicios/parametros/publicacion.service';
import { SeguridadService } from 'src/app/servicios/seguridad-.service';
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';

declare const ShowNotificationMessage: any;


@Component({
  selector: 'app-nueva-publicacion',
  templateUrl: './nueva-publicacion.component.html',
  styleUrls: ['./nueva-publicacion.component.css']
})
export class NuevaPublicacionComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: PublicacionService,
    private servicioSeguridad : SeguridadService,
  ) { }

   /*Se ejecuta al inicio del componente*/
   ngOnInit(): void {
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

  registrarPublicacion()
  {
    if (this.fgValidator.invalid) 
    {
      ShowNotificationMessage('Formulario invalido');
    }
    else
    {
      let modelo = this.getPublicacionData();
      console.log(modelo);
      this.servicio.guardarRegistroNuevo(modelo).subscribe(data => {
        if (data) {
          ShowNotificationMessage('registro exitoso');
          this.reiniciarCampos();
        }
        else {
          ShowNotificationMessage('Error en el registro');
        }
      });
    }
  }

  /* Crear una instancia del modelo para ser enviada */
  getPublicacionData(): PublicacionModel
  {
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

  get fgv()
  {
    return this.fgValidator.controls;
  }

  reiniciarCampos()
  {
    this.ngOnInit();
  }
} 

