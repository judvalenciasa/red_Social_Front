import { Injectable } from '@angular/core';
import { UsuariosModel } from '../modelos/Seguridad/usuarios.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiciosConfig } from '../config/servicios.config';
import { UploadFileModel } from "../modelos/upload/upload.model";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // La entidad a la cual se le solicitan los servicios
  entidad: String = 'usuarios';

  constructor(
    private http: HttpClient
  ) { }

  registrarUsuario(modelo: UsuariosModel): Observable<UsuariosModel> {
    return this.http.post<UsuariosModel>(`${ServiciosConfig.BASE_URL}${this.entidad}`, modelo, {
      headers: new HttpHeaders({

      })
    })
  }

  subirImagenPersonal(FormData): Observable<UploadFileModel> {
    return this.http.post<UploadFileModel>(`${ServiciosConfig.BASE_URL}userProfilePhoto`, FormData, {
      headers: new HttpHeaders({

      })
    });
  }

  subirImagenCedula(FormData): Observable<UploadFileModel> {
    return this.http.post<UploadFileModel>(`${ServiciosConfig.BASE_URL}userCedulaPhoto`, FormData, {
      headers: new HttpHeaders({

      })
    });
  }
}