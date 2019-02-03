import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../models';

@Component({
  selector: 'app-movie-item',
  template: `<li (click)="select.emit(movie.ID)">{{movie.name}}</li>`,
  styles: []
})

export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
