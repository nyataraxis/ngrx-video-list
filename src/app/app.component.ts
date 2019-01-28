import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Video, Movie } from './models';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as videoAction from './store/actions/videos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  videos$: Observable<Video[]>;
  selected$: Observable<any>;

  movies$: Observable<any>;
  title = 'ngrx-video-list';
  constructor(private store: Store<fromRoot.State>) {
    this.videos$ = store.select(fromRoot.getAllVideos);
    this.selected$ = store.select(fromRoot.getSelectedVideo);
    this.movies$ = store.select(fromRoot.getMovies);
  }

  ngOnInit() {
    this.store.dispatch(new videoAction.LoadVideos());
  }
  onSelect(id: number) {
    this.store.dispatch(new videoAction.Select(id));
  }
}
