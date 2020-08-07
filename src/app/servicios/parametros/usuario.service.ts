import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UsuarioModel} from '../../modelos/parametros/usuario.model';
import { Observable } from 'rxjs';
import { ServiciosConfig } from '../../config/servicios.config';
import { SeguridadService } from '../../servicios/seguridad-.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  entidad: String = 'usuarios';
  token: String;

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService) {
      this.token = seguridadService.getToken();
     }

  /**
   * Obtiene todos los registros
   */
  obtenerRegistros(): Observable<UsuarioModel[]>
  {
    return this.http.get<UsuarioModel[]>(`${ServiciosConfig.BASE_URL}${this.entidad}`);
  }

  /**
   * Obtiene un registro dado un id
   */
  obtenerRegistroId(Id: String): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${ServiciosConfig.BASE_URL}${this.entidad}/${Id}`);
  }

  /**
   * Almacena un registro nuevo dentro de la coleccion
   */
  guardarRegistroNuevo(record: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiciosConfig.BASE_URL}${this.entidad}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  /**
   * edita un registro dentro de la coleccion
   */
  editarRegistro(record: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(`${ServiciosConfig.BASE_URL}${this.entidad}/${record.id}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  /**
   * borra un registro dado un id
   */
  borrarRegistro(recordId: String): Observable<any> {
    return this.http.delete<any>(`${ServiciosConfig.BASE_URL}${this.entidad}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

}
