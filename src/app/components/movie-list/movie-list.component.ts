import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'app-movie-list',
  template: `
    <div class="list">
      <h2>{{label}}</h2>
      <app-movie-item *ngFor="let movie of movies"
      [movie]="movie"
      >
      </app-movie-item>
    </div>
  `,
  styles: [`
  .list {
    display: flex;
    flex-direction: column;
  }`]
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() label: string;
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
