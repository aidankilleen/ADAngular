import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    {{ price | currency:'EUR' }} <br>

    {{ date | date:'yyyy-MM-dd' }}

    <hr>
    <input type="range" [(ngModel)]="length" max="255"><br>

    {{ text | summary:length }}


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 5;

  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae quam provident temporibus qui quaerat libero in nesciunt nobis tempore, eum, dolorum est voluptatibus sint necessitatibus quos molestiae. Voluptates, ullam!"

  title = 'This is a test for pipes';

  price = 199.12934567;

  date = new Date();


}
