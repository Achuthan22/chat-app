import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  socket = io('http://localhost:3000');

  public sendMessage(messageData: any) {
    console.log('sendMessage: ', messageData)
    this.socket.emit('message', messageData);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) => {
      console.log('message: ', message)
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
