import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder
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
      cedula: ['',[Validators.required, Validators.minLength(5)]],
      celular: ['',[Validators.required, Validators.minLength(12), Validators.maxLength(14)]],
      correo: ['',[Validators.required, Validators.email]],
      fecha_Nacimiento: ['',[Validators.required]],
      foto_Cedula: ['',[Validators.required]],
      foto_Personal: ['',[Validators.required]],

    });
  }
}
