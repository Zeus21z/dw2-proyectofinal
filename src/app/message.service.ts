import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Aquí se especifica que este servicio será proporcionado en la raíz
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message); // Agrega un mensaje al array de mensajes
  }

  clear() {
    this.messages = []; // Borra todos los mensajes del array
  }
}
