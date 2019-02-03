import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as videoActions from '../actions/videos';
import * as fromServices from '../../services';

@Injectable()
export class VideosEffects {
  constructor(
    private actions$: Actions,
    private videoService: fromServices.VideoService
  ) {}
  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType(videoActions.LOAD_VIDEOS),
    switchMap(() => {
      return this.videoService.getVideos().pipe(
        map(videos => new videoActions.LoadVideosSuccess(videos.VODs)),
        catchError(error => of(new videoActions.LoadVideosFail(error)))
      );
    })
  );
  @Effect()
  loadMovie$ = this.actions$.pipe(
    ofType<videoActions.Select>(videoActions.SELECT),
    switchMap(action => {
      return this.videoService.getVideo(action.payload).pipe(
        map(movie => new videoActions.SelectSuccess(movie.VODDetail)),
        catchError(error => of(new videoActions.LoadVideosFail(error)))
      );
    })
  );
}
