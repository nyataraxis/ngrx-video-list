import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from './models';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as videoAction from './store/actions/videos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos$: Observable<Video[]>;
  selected$: Observable<any>;
  title = 'ngrx-video-list';
  constructor(private store: Store<fromRoot.State>) {
    this.videos$ = store.select(fromRoot.getAllVideos);
    this.selected$ = store.select(fromRoot.getSelectedVideo);
  }
  onSelect(id: number) {
    this.store.dispatch(new videoAction.Select(id));
  }
}
