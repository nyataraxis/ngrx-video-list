import { Action } from '@ngrx/store';
import { Video, Movie, MovieList } from '../../models';

export const SELECT = '[Videos] Select';
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
  constructor(public payload: MovieList) {}
}

export class LoadVideos implements Action {
  readonly type = LOAD_VIDEOS;
  constructor() {}
}

export class Select implements Action {
    readonly type = SELECT;
    constructor(public payload: number) { }
}

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: Video) { }
}

export type Action = AddOne | Select | LoadVideos | LoadVideosSuccess | LoadVideosFail;
