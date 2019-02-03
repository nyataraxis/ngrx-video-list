import * as videoAction from '../actions/videos';

import { Video, Movie, MovieDetails } from '../../models';

export interface State {
  selected: number;
  movies: { [ID: number]: Movie };
  moviesDetailed: { [ID: number]: MovieDetails };
}

export const initialState: State = {
  selected: null,
  movies: [],
  moviesDetailed: {}
};

export function reducer(state = initialState, action: videoAction.Action) {
  switch (action.type) {

    case videoAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }
    case videoAction.SELECT_SUCCESS: {
      const movieDetails = action.payload;
      console.log(movieDetails);
      return {
        ...state,
        moviesDetailed: { ...state.moviesDetailed, [movieDetails.ID]: movieDetails }
      };
    }
    case videoAction.LOAD_VIDEOS: {
      return {
        ...state
      };
    }
    case videoAction.LOAD_VIDEOS_SUCCESS: {
      return {
        ...state,
        movies: action.payload
      };
    }
    default:
      return state;
  }
}

export const getDetailedMovies = (state: State) => state.moviesDetailed;
export const getSelected = (state: State) => state.selected;
export const getLoadedMovies = (state: State) => state.movies;
