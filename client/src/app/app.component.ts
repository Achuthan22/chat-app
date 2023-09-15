import { Component } from '@angular/core';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMessage = '';
  messageList: any[] = [];

  msgTo: string = 'manoj';
  msgFrom: string = 'achu';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getNewMessage().subscribe((message: any) => {
      if (Array.isArray(message)) this.messageList.push(...message);
      else if (message?.msg) this.messageList.push(message);
    })
  }

  sendMessage() {
    const data = {
      msgFrom: this.msgFrom,
      msgTo: this.msgTo,
      timeOfDelivery: new Date(),
      msg: this.newMessage
    }
    this.chatService.sendMessage(data);
    this.newMessage = '';
  }
}
