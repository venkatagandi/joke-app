import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Joke } from '../Joke';
@Component({
  selector: 'va-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

}
