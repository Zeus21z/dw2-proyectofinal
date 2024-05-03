import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Importa el módulo BrowserModule
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule para manejo de formularios

import { AppComponent } from './app.component'; // Importa el componente AppComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Importa el componente DashboardComponent
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa el componente HeroDetailComponent

import { HeroesComponent } from './heroes/heroes.component'; // Importa el componente HeroesComponent
import { MessagesComponent } from './messages/messages.component'; // Importa el componente MessagesComponent

import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento AppRoutingModule

@NgModule({
  imports: [
    BrowserModule, // Importa el módulo BrowserModule
    FormsModule, // Importa el módulo FormsModule
    AppRoutingModule, // Importa el módulo de enrutamiento AppRoutingModule
    HeroDetailComponent // Importa el componente HeroDetailComponent
  ],
  declarations: [
    AppComponent, // Declara el componente AppComponent
    DashboardComponent, // Declara el componente DashboardComponent
    HeroesComponent, // Declara el componente HeroesComponent
    MessagesComponent // Declara el componente MessagesComponent
  ],
  bootstrap: [ AppComponent ] // Indica que el componente raíz es AppComponent
})
export class AppModule { } // Define el módulo principal AppModule
