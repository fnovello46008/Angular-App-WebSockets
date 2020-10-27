import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  subject = webSocket("ws://192.168.1.215:8080");

  messageData = { type: "undefined", data: {} };


  constructor() { }

  sendMessageToServer(messageToSend)
  {
    this.subject.next(messageToSend);
  }


}
