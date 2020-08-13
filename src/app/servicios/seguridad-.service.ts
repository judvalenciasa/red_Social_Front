import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inicioModel } from '../modelos/iniciar.model';
import { ServiciosConfig } from '../config/servicios.config';
import { Observable, BehaviorSubject } from 'rxjs';
import { recuperarContraseña } from '../modelos/seguridad/recuperarContraseña';
import { cambiarClave } from '../modelos/seguridad/cambiarClave.modelo';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  dataUsuario = new BehaviorSubject<inicioModel>(new inicioModel());

  constructor(private http: HttpClient) {
    this.verificarSesionActiva();
  }

  verificarSesionActiva() {
    let sesionActual = this.getSesion();
    let dataUsuario = new inicioModel();
    console.log(sesionActual);
    if (sesionActual) {
      dataUsuario = JSON.parse(sesionActual);
      this.setdataUsuario(dataUsuario);
    }
  }

  setdataUsuario(value: inicioModel) {
    this.dataUsuario.next(value);
  }

  getdataUsuario() {
    return this.dataUsuario.asObservable();
  }

  inicioUsuario(modelo: inicioModel): Observable<inicioModel> {
    return this.http.post<inicioModel>(
      `${ServiciosConfig.BASE_URL}login`,
      modelo,
      {
        headers: new HttpHeaders({}),
      }
    );
  }

  guardarSesion(datosSeccion: any): Boolean {
    let sesionActual = localStorage.getItem('sesion');
    if (sesionActual) {
      console.log('Ya existe');
      return false;
    } else {
      let data: inicioModel = {
        id: datosSeccion.data.id_Usuario,
        correo: datosSeccion.data.correo,
        token: datosSeccion.token,
        isLogged: true,
        rol: datosSeccion.data.rol,
      };
      localStorage.setItem('sesion', JSON.stringify(data));
      this.setdataUsuario(data);
      return true;
    }
  }

  /**
  retorna la seccion del inicio
   */
  getSesion() {
    let sesionActual = localStorage.getItem('sesion');
    return sesionActual;
  }

  seccionExistente(): Boolean {
    return this.getSesion() ? true : false;
  }

  devolverRol(): Boolean {
    let sessioActual = this.getSesion();
    return JSON.parse(sessioActual).rol;
  }

  esAdmin(rol): Boolean {
    let sessioActual = this.getSesion();
    return JSON.parse(sessioActual).rol == rol;
  }

  
  recuperarClave(model: recuperarContraseña): Observable<Boolean> {
    return this.http.post<Boolean>(`${ServiciosConfig.BASE_URL}password-reset`, model, {
      headers: new HttpHeaders({
      })
    })
  }

  Cerrar() {
    localStorage.removeItem('sesion');
    this.setdataUsuario(new inicioModel());
  }

  /**
   * Return the token string
   */
  getToken(): String {
    let sesionActual = this.getSesion();
    return JSON.parse(sesionActual).token;
  }

  getUserId(): String {
    let sessioActual = this.getSesion();
    return JSON.parse(sessioActual).id;
  }

  cambiarClave(model: cambiarClave): Observable<Boolean>{
    return this.http.post<Boolean>(`${ServiciosConfig.BASE_URL}change-password`, model, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.getToken()}`
      })
    })
  }
}
