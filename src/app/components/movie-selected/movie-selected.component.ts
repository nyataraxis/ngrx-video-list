import { Component, OnInit, Input } from '@angular/core';
import { MovieDetails } from '../../models';

@Component({
  selector: 'app-movie-selected',
  template: `
    <div *ngIf="movie.name">
      <h1>{{movie.name}}</h1>
      <p>{{movie.introduce}}</p>
      <img *ngIf="movie.picture" src="{{movie.picture.posters[0]}}" alt="Movie poster">
    </div>
  `,
  styles: []
})
export class MovieSelectedComponent implements OnInit {
  @Input() movie: MovieDetails;
  constructor() { }

  ngOnInit() {
  }

}
