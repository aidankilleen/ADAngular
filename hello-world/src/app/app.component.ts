import { Component } from '@angular/core';
import { Message } from './message/message.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ name }}</h2>
    <button (click)="onClick()">Press Me</button>
    <button (click)="onClear()">Clear</button>
    <hr>
    <message 
      *ngFor="let message of messages"
      [message]="message"
      (expanded)="onExpanded()"
      (deleteMessage)="onDelete($event)">
    </message>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Angular';
  name = "Aidan";

  messages:Message[] = [
    new Message("Msg 1", "this is msg 1"), 
    new Message("Msg 2", "this is msg 2"), 
    new Message("Msg 3", "this is msg 3")
  ];

  onExpanded() {
    alert("expanded");
  }
  onDelete(messageToDelete:Message) {

    let index = this.messages.findIndex(message => message == messageToDelete);
    this.messages.splice(index, 1);
  }
  
  onClick() {

    let newMessage = new Message("NM", new Date().toISOString());
    this.messages.push(newMessage);


  }

  onClear() {
    this.messages = [];    
  }
}
