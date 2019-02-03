import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from './models';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as videoAction from './store/actions/videos';
import * as authAction from './store/actions/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedMovie$: Observable<any>;
  movies$: Observable<any>;
  auth$: Observable<any>;
  title = 'ngrx-video-list';
  constructor(private store: Store<fromRoot.State>) {
    this.movies$ = store.select(fromRoot.getMovies);
    this.auth$ = store.select(fromRoot.getIsAuth);
    this.selectedMovie$ = store.select(fromRoot.getSelectedMovie);
  }

  ngOnInit() {
    this.store.dispatch(new videoAction.LoadVideos());
  }

  loginTrigger() {
    this.store.dispatch(new authAction.Login());
  }
  logoutTrigger() {
    this.store.dispatch(new authAction.Logout());
  }
  onSelect(id: number) {
    this.store.dispatch(new videoAction.Select(id));
  }
}
