import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad-.service';
import { ServiciosConfig } from '../config/servicios.config';

@Injectable({
  providedIn: 'root',
})
export class AutenticadoUsuarioGuard implements CanActivate {
  constructor(private servicio: SeguridadService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('cerrar sesion ');
    if (!this.servicio.seccionExistente()) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
