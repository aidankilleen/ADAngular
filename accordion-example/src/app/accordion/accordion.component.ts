import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from '../accordionitem.model';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <accordion-item 
        *ngFor="let item of items"
        [item]="item"
      ></accordion-item>
    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items:AccordionItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
