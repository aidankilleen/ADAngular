import { Component } from '@angular/core';
import { AccordionItem } from './accordionitem.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <accordion [items]="items"></accordion>
    <hr>
    <accordion [items]="newsItems"></accordion>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AccordionExample';

  items:AccordionItem[] = [
    new AccordionItem("Item 1", "This is item 1", true), 
    new AccordionItem("Item 2", "This is item 2", false), 
    new AccordionItem("Item 3", "This is item 3", false), 
    new AccordionItem("Item 4", "This is item 4", false), 
  ];

  newsItems:AccordionItem[] = [
    new AccordionItem("News 1", "News item 1"), 
    new AccordionItem("News 2", "News item 2"), 
    new AccordionItem("News 3", "News item 3"), 
  ]

  constructor() {
    var name;
    console.log("is this working?");
    console.log(name);

    name = "Aidan";
    console.log(name);

    let address = "Somewhere in Cork";
    console.log(address);

    if (true) {
      console.log(address);
    } 

    const pi = 3.145;

    // pi = 4;


    // destructuring & spread
    let list = [1, 2, 3, 4];

    let [a, b, ...rest] = list;

    console.log(a);
    console.log(b);
    console.log(rest);

    // destructuring works with objects too!

    let o = {
      title: "this is the title", 
      message: "this is the message",

      sub: {
        town: "Midleton", 
        county: "Cork"
      }
    }

    let { message:msg, sub:{county, town}, ...remainder} = o;

    console.log(msg);
    console.log(county);
    console.log(town);

    console.log(o.message);
    console.log(remainder);

    console.log("=============================");
    // arrow functions


    let message = {
      title: "this is the title",
      text: "this is the text",

      display: function() {

        console.log(this.text);
      }, 

      displayLater: function() {

        setTimeout(() => {
          console.log("displayLater()");
          console.log(this.text);
        }, 3000);
      }
    }
    message.display();
    message.displayLater();

    // array / list processing

    let numbers = [1, 5, 3, 2, 8, 9, 6, 10, 1, 5];

    numbers.forEach((number) => {
      console.log(number);
    });

    let result = numbers.filter((number)=> {
      if (number < 6) {
        return true;
      } else {
        return false;
      }
    });

    console.log(result);

    result = numbers.filter(number => number < 6);

    console.log(result);

    let sorted = result.sort((a,b) => {

      console.log(`comparing ${a} and ${b}`);
      if (a < b) {
        return -1;
      } else if (a == b){
        return 0;
      } else {
        return 1;
      }
    });


    console.log(sorted);

    sorted = result.sort((a, b) => a - b);

    console.log(sorted);

    // you can chain these together

    let sortedFilteredList = numbers.filter(item => item < 6)
           .sort((a, b) => a - b);

    console.log(sortedFilteredList);


    // these work on objects as well - 

    let users = [
      {id:99, name:"Zoltar", email:"zoltar@gmail.com", active: true}, 
      {id:9, name:"Alice", email:"alice@gmail.com", active: true}, 
      {id:125, name:"Yvonne", email:"yvonne@gmail.com", active: true}, 
      {id:2, name:"Martin", email:"marin@gmail.com", active: false}, 
      {id:3, name:"Carol", email:"carol@gmail.com", active: true}, 
    ]

    let activeUsers = users.filter((user)=> {
      if (user.active) {
        return true;
      } else {
        return false;
      }
    });

    console.log("Active Users before");
    console.log(activeUsers);

    activeUsers = users.filter(user => user.active);

    console.log("Active users after filter:");
    console.log(activeUsers);

    let sortedUsers = activeUsers.sort((a, b) => {

      return a.id - b.id;
    });

    console.log("=========================");
    console.log(sortedUsers);



    let uppercaseUsers = users.map(user => {

      user.name = user.name.toUpperCase();
      return user;
    });

    console.log(uppercaseUsers);
    console.log(users);
    console.log(users[2]);

    let currentUser = users[0];

    currentUser.active = true;

    let otherUsers = users.map(user => {
      user.active = user == currentUser
      return user;
    });

    console.log(otherUsers);


    // templated strings

    let s = `
    
      multi 
      line
      strings
      ${ name }
      ${ users[4].active ? "Active" : "Inactive" }
    `;  

    console.log(s);



  }
}
