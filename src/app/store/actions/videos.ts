import { Action } from '@ngrx/store';
import { Movie, MovieList, MovieDetails } from '../../models';

export const SELECT = '[Videos] Select';
export const SELECT_SUCCESS = '[Videos] Select Success';
export const ADD_ONE = '[Videos] Add One';
export const LOAD_VIDEOS = '[Videos] Load Videos';
export const LOAD_VIDEOS_SUCCESS = '[Videos] Load Videos Success';
export const LOAD_VIDEOS_FAIL = '[Videos] Load Videos Fail';

export class LoadVideosSuccess implements Action {
  readonly type = LOAD_VIDEOS_SUCCESS;

  constructor(public payload: Movie[]) { }
}

export class LoadVideosFail implements Action {
  readonly type = LOAD_VIDEOS_FAIL;
  constructor(public payload: MovieList) { }
}

export class LoadVideos implements Action {
  readonly type = LOAD_VIDEOS;
  constructor() { }
}

export class Select implements Action {
  readonly type = SELECT;
  constructor(public payload: number) { }
}


export class SelectSuccess implements Action {
  readonly type = SELECT_SUCCESS;
  constructor(public payload: MovieDetails) { }
}

export type Action =  Select | LoadVideos | LoadVideosSuccess | LoadVideosFail | SelectSuccess;
