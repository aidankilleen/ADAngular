import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'message',
  template: `<div>
      <h1>{{ message.title }}</h1>
      <p *ngIf="display">{{ message.text }}<p>

      <button (click)="onDelete()">X</button>
    </div>`,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Output() expanded = new EventEmitter();
  @Output() deleteMessage = new EventEmitter();
  @Input() message:Message = new Message("","");
  display = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.display = !this.display;
    this.expanded.emit();
  }

  onDelete() {
    this.deleteMessage.emit(this.message);
  }

}
