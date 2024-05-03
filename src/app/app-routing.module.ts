import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Importa módulos relacionados con enrutamiento

import { DashboardComponent } from './dashboard/dashboard.component'; // Importa el componente DashboardComponent
import { HeroesComponent } from './heroes/heroes.component'; // Importa el componente HeroesComponent
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa el componente HeroDetailComponent

const routes: Routes = [ // Define las rutas de la aplicación
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirige la ruta raíz a '/dashboard'
  { path: 'dashboard', component: DashboardComponent }, // Asocia la ruta '/dashboard' con el componente DashboardComponent
  { path: 'detail/:id', component: HeroDetailComponent }, // Asocia rutas que contienen un parámetro 'id' con el componente HeroDetailComponent
  { path: 'heroes', component: HeroesComponent } // Asocia la ruta '/heroes' con el componente HeroesComponent
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // Importa y configura el módulo de enrutamiento con las rutas definidas
  exports: [ RouterModule ] // Exporta el módulo de enrutamiento para su uso en otros módulos
})
export class AppRoutingModule {} // Define y exporta el módulo AppRoutingModule
