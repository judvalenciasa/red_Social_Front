import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefectoComponent } from './publico/home/defecto/defecto.component';
import { NavbarComponent } from './publico/pagina-Master/navbar/navbar.component';
import { FooterComponent } from './publico/pagina-Master/footer/footer.component';
import { HeroComponent } from './publico/pagina-Master/hero/hero.component';
import { MenuComponent } from './publico/pagina-Master/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ConocenosComponent } from './publico/pagina-Master/conocenos/conocenos.component';
import { MostrarPublicacionComponent } from './publico/muro/mostrar-publicacion/mostrar-publicacion.component';
import { NuevaPublicacionComponent } from './publico/muro/nueva-publicacion/nueva-publicacion.component';


@NgModule({
  declarations: [
    AppComponent,
    DefectoComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    MenuComponent,
    ConocenosComponent,
    MostrarPublicacionComponent,
    NuevaPublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
