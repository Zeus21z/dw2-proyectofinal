import { Component, OnInit } from '@angular/core'; // Importa Component y OnInit desde Angular core
import { MessageService } from '../message.service'; // Importa el servicio MessageService

@Component({
  selector: 'app-messages', // Selector del componente
  templateUrl: './messages.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./messages.component.css'] // Estilos CSS asociados al componente
})
export class MessagesComponent implements OnInit { // Define la clase del componente e implementa OnInit

  constructor(public messageService: MessageService) {} // Constructor que inyecta el servicio MessageService

  ngOnInit() {} // Método ngOnInit de OnInit, se ejecuta cuando el componente se inicializa
}
