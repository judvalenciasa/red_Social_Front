import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inicioModel } from '../modelos/iniciar.model';
import { ServiciosConfig } from '../config/servicios.config';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  dataUsuario = new BehaviorSubject<inicioModel>(new inicioModel());

  constructor(
    private http: HttpClient
  ) { 
    this.verificarSesionActiva();
  }

  verificarSesionActiva(){
    let sesionActual = this.getSesion();
    let dataUsuario = new inicioModel();
    if (sesionActual){
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
    return this.http.post<inicioModel>(`${ServiciosConfig.BASE_URL}login`, modelo, {
      headers: new HttpHeaders({

      })
    })
  }

  guardarSesion(sessionData: any): Boolean {
    let sesionActual = localStorage.getItem('sesion');
    if (sesionActual) {
      console.log("Already exist")
      return false;
    } else {
      let data: inicioModel = {
        id: sessionData.data.id_Usuario,
        correo: sessionData.data.correo,
        token: sessionData.token,
        isLogged: true,
        rol: sessionData.data.rol,
      };
      localStorage.setItem('sesion', JSON.stringify(data));
      this.setdataUsuario(data);
      return true;
    }
  }

  getSesion() {
    let sesionActual = localStorage.getItem('sesion');
    //console.log(sesionActual);
    return sesionActual;
  }

  Cerrar(){
    localStorage.removeItem('sesion');
    this.setdataUsuario(new inicioModel);
  }

}

