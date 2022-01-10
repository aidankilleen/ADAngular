import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionItem } from '../accordionitem.model';

@Component({
  selector: 'accordion-item',
  template: `
    <div>
      <h1 (click)="onClick()">{{ item.title }}</h1>
      <p *ngIf="item.expanded">{{ item.text }}</p>
    </div>
  `,
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

  @Input() item: AccordionItem = new AccordionItem("", "", false);
  @Output() expanded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.item.expanded = !this.item.expanded;
    this.expanded.emit(this.item);
  }

}
