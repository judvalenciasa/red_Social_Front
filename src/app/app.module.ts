import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefectoComponent } from './publico/home/defecto/defecto.component';
import { NavbarComponent } from './publico/pagina-Master/navbar/navbar.component';
import { FooterComponent } from './publico/pagina-Master/footer/footer.component';
import { HeroComponent } from './publico/pagina-Master/hero/hero.component';
import { MenuComponent } from './publico/pagina-Master/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DefectoComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
