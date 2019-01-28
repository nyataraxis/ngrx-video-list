import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';

export const LOGOUT = '[Auth] Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';


export class Login implements Action {
  readonly type = LOGIN;
  constructor() {}
}
export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor() {}
}
export class Logout implements Action {
  readonly type = LOGOUT;
  constructor() {}
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
  constructor() {}
}

export type Action = Login | Logout | LoginSuccess | LogoutSuccess;
