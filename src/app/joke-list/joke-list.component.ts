import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'va-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  public jokes: Object[];

  ngOnInit() {
     this.jokes = [
        {
          setup:"What did the cheese say when it looked in the mirror?",
          punchline:"Halloumi (hello me)"
        },
        {
          setup:"What kind of cheese do you use to disguise a horse?",
          punchline:"Mask-a-pony(Mascarpone)"
        },
        {
          setup:"A kind threw a lump of cheddar at me",
          punchline:"I thought That's not very mature"
        }
      ];
  }

  constructor() {
  }

}
