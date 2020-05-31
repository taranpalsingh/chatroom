import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatroom';
  sender: String;

  constructor(private chatService: ChatService){ }

  sendMessage(event){
    console.log(event.target.value);
    this.chatService.sendMessage(event.target.value);
    
  }
}
