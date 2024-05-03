import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector del componente
  templateUrl: './app.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./app.component.css'] // Estilos CSS asociados al componente
})
export class AppComponent {
  title = 'Tour of Heroes'; // Propiedad del componente: título de la aplicación
}
