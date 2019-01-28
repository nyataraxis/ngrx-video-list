import * as authAction from '../actions/auth';
export interface State {
  isAuthenticated: boolean;
}

export const initialState: State = {
  isAuthenticated: localStorage.getItem('loggedIn') !== null
};

export function reducer(state = initialState, action: authAction.Action) {
  switch (action.type) {
    case authAction.LOGIN: {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    case authAction.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false
      };
    }
    default:
      return state;
  }
}

export const getAuthState = (state: State) => state.isAuthenticated;
