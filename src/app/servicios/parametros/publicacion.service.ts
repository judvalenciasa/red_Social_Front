import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PublicacionModel } from '../../modelos/parametros/publicacion.model';
import { Observable } from 'rxjs';
import { ServiciosConfig } from '../../config/servicios.config';
import { SeguridadService } from '../../servicios/seguridad-.service';
import { UploadFileModel } from 'src/app/modelos/upload/upload.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  entidad: String = 'publicacions';
  token: String;
  filter: String = '?filter={"include":[{"relation":"usuario"}]}';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService) {
    this.token = seguridadService.getToken();
  }

  /**
   * Obtiene todos los registros
   */
  obtenerRegistros(): Observable<PublicacionModel[]> {
    return this.http.get<PublicacionModel[]>(`${ServiciosConfig.BASE_URL}${this.entidad}`);
  }

  /**
   * Obtiene un registro dado un id
   */
  obtenerRegistroId(Id: String): Observable<PublicacionModel> {
    return this.http.get<PublicacionModel>(`${ServiciosConfig.BASE_URL}${this.entidad}/${Id}`);
  }

  /**
   * Almacena un registro nuevo dentro de la coleccion
   */
  guardarRegistroNuevo(record: PublicacionModel): Observable<PublicacionModel> {
    return this.http.post<PublicacionModel>(`${ServiciosConfig.BASE_URL}${this.entidad}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  /**
   * edita un registro dentro de la coleccion
   */
  editarRegistro(record: PublicacionModel): Observable<PublicacionModel> {
    /**
     * Se elmina el id del modelo, para el backend no intente cabiarlo, solucion a error (402)
     */
    let id = record.id;
    delete record["id"];
    return this.http.put<PublicacionModel>(`${ServiciosConfig.BASE_URL}${this.entidad}/${id}`, record, {
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

  subirImagenPUblicacion(FormData): Observable<UploadFileModel> {
    return this.http.post<UploadFileModel>(`${ServiciosConfig.BASE_URL}publicationPhoto`, FormData, {
      headers: new HttpHeaders({

      })
    });
  }
}