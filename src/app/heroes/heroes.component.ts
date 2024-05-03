import { Component, OnInit } from '@angular/core'; // Importa Component y OnInit desde Angular core
import { Hero } from '../heroes'; // Importa la interfaz Hero desde el archivo heroes.ts
import { HeroService } from '../hero.service'; // Importa el servicio HeroService
import { MessageService } from '../message.service'; // Importa el servicio MessageService

@Component({
  selector: 'app-heroes,  app-hero-detail', // Selector del componente
  templateUrl: './heroes.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./heroes.component.css'] // Estilos CSS asociados al componente
})
export class HeroesComponent implements OnInit { // Define la clase del componente e implementa OnInit

  selectedHero!: Hero; // Propiedad para almacenar el héroe seleccionado
  heroes!: Hero[]; // Propiedad para almacenar la lista de héroes

  constructor(private heroService: HeroService, private messageService: MessageService) { } // Constructor que inyecta HeroService y MessageService

  ngOnInit() { // Método ngOnInit de OnInit, se ejecuta cuando el componente se inicializa
    this.getHeroes(); // Llama al método para obtener la lista de héroes
  }

  onSelect(hero: Hero): void { // Método para seleccionar un héroe
    this.selectedHero = hero; // Asigna el héroe seleccionado
    this.messageService.add(`Componente de héroes: héroe seleccionado id=${hero.id}`); // Añade un mensaje al servicio de mensajes
  }

  getHeroes(): void { // Método para obtener la lista de héroes
    this.heroService.getHeroes() // Llama al método del servicio para obtener héroes
        .subscribe(heroes => this.heroes = heroes); // Suscribe al observable y asigna los héroes obtenidos a la propiedad heroes
  }
}
















































/*import { Component, OnInit } from '@angular/core'; // Importa los módulos 'Component' y 'OnInit' desde '@angular/core'
import { Hero } from '../heroes'; // Importa la interfaz 'Hero' desde el archivo '../heroes'
//import { HEROES } from '../mock-heroes'; // Importa la constante 'HEROES' desde el archivo '../mock-heroes'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes', // Define el selector del componente como 'app-heroes', lo que significa que se puede usar con <app-heroes> en la plantilla HTML
  templateUrl: './heroes.component.html', // Define la plantilla HTML asociada con este componente
  styleUrls: ['./heroes.component.css'] // Define las hojas de estilo CSS asociadas con este componente
})
export class HeroesComponent { // Define la clase 'HeroesComponent'
  heroes: Hero[] = [];
  //heroes = HEROES; // Crea una propiedad 'heroes' que se inicializa con la constante 'HEROES'
  selectedHero?: Hero // Declara una propiedad 'selectedHero' que puede ser de tipo 'Hero' o 'undefined'

  onSelect(hero: Hero): void { // Define un método 'onSelect' que toma un parámetro 'hero' de tipo 'Hero' y no devuelve nada
    this.selectedHero = hero; // Asigna el héroe seleccionado al 'selectedHero'
  }
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  
}
*/

/*export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}*/
