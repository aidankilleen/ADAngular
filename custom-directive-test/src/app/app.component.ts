import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Custom Directive</h1>

    <input [appFormatText]="'uppercase'" type="text"><br>
    <input [appFormatText]="'lowercase'" type="text"><br>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-directive-test';
}
