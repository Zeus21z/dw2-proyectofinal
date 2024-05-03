import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importa Observable y of de RxJS
import { Hero } from './heroes'; // Importa la interfaz Hero
import { HEROES } from './mock-heroes'; // Importa la constante HEROES que contiene datos de héroes
import { MessageService } from './message.service'; // Importa el servicio MessageService

@Injectable({ providedIn: 'root' }) // Indica que este servicio será proporcionado en la raíz
export class HeroService {

  constructor(private messageService: MessageService) { } // Constructor que inyecta el servicio MessageService

  getHeroes(): Observable<Hero[]> { // Método para obtener héroes
    const heroes = of(HEROES); // Crea un observable a partir de la constante HEROES
    this.messageService.add('Servicio de héroe: héroe buscado'); // Añade un mensaje al servicio de mensajes
    return heroes; // Retorna el observable de héroes
  }

  getHero(id: number): Observable<Hero> { // Método para obtener un héroe por su id
    const hero = HEROES.find(h => h.id === id)!; // Encuentra el héroe con el id especificado
    this.messageService.add(`Servicio de héroe: héroe buscado id=${id}`); // Añade un mensaje al servicio de mensajes
    return of(hero); // Retorna un observable con el héroe encontrado
  }
}
