import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inicioModel } from '../modelos/iniciar.model';
import { ServiciosConfig } from '../config/servicios.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(
    private http: HttpClient
  ) { }

  inicioUsuario(modelo: inicioModel): Observable<inicioModel> {
    return this.http.post<inicioModel>(`${ServiciosConfig.BASE_URL}login`, modelo, {
      headers: new HttpHeaders({

      })
    })
  }
}
