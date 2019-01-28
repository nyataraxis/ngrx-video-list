import * as videoAction from '../actions/videos';

import { Video, Movie } from '../../models';

export interface State {
  ids: number[];
  videos: { [id: number]: Video };
  selected: number;
  movies: Movie[];
}

export const initialState: State = {
  ids: [1, 2, 3],
  videos: {
    1: {
      id: 1,
      name: 'Interstellar',
      description:
        'Interstellar is a 2014 epic science fiction film directed, co-written, and co-produced by Christopher Nolan.',
      img: 'https://goo.gl/8mG12t'
    },
    2: {
      id: 2,
      name: 'Shutter Island',
      // tslint:disable-next-line:max-line-length
      description:
        'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
      img: 'https://goo.gl/wfhjUF'
    },
    3: {
      id: 3,
      name: 'The Grand Budapest Hotel',
      // tslint:disable-next-line:max-line-length
      description:
        'The adventures of Gustave H, a legendary concierge at a famous hotel the lobby boy who becomes his most trusted friend.',
      img: 'https://goo.gl/mDBt45'
    }
  },
  selected: null,
  movies: []
};

export function reducer(state = initialState, action: videoAction.Action) {
  switch (action.type) {
    case videoAction.ADD_ONE: {
      const newVideo: Video = action.payload;
      return {
        ...state,
        ids: [...state.ids, newVideo.id],
        videos: { ...state.videos, newVideo }
      };
    }
    case videoAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
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

export const getIds = (state: State) => state.ids;
export const getVideos = (state: State) => state.videos;
export const getSelected = (state: State) => state.selected;
export const getLoadedMovies = (state: State) => state.movies;
