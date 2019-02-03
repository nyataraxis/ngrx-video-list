import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';

import * as fromVideos from './videos';
import * as fromAuth from './auth';

export interface State {
  videos: fromVideos.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  videos: fromVideos.reducer,
  auth: fromAuth.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getVideoState = createFeatureSelector<fromVideos.State>('videos');

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getIsAuth = createSelector(
  getAuthState,
  fromAuth.getAuthState
);

export const getIds = createSelector(
  getVideoState,
  fromVideos.getIds
);

export const getVideos = createSelector(
  getVideoState,
  fromVideos.getVideos
);

export const getDetailedMovies = createSelector(
  getVideoState,
  fromVideos.getDetailedMovies
);

export const getSelected = createSelector(
  getVideoState,
  fromVideos.getSelected
);

export const getSelectedVideo = createSelector(
  getSelected,
  getVideos,
  (selectedId, videos) => {
    return {
      ...videos[selectedId]
    };
  }
);
export const getSelectedMovie = createSelector(
  getSelected,
  getDetailedMovies,
  (selectedId, moviesDetailed) => {
    return {
      ...moviesDetailed[selectedId]
    };
  }
);
export const getAllVideos = createSelector(
  getIds,
  getVideos,
  (ids, videos) => {
    return ids.map(id => videos[id]);
  }
);

export const getMovies = createSelector(
  getVideoState,
  fromVideos.getLoadedMovies
);
