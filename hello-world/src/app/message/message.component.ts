import { Component, Input, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'message',
  template: `<div>
      <h1>{{ message.title }}</h1>
      {{ message.text }}
    </div>`,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message:Message = new Message("","");

  constructor() { }

  ngOnInit(): void {
  }

}
