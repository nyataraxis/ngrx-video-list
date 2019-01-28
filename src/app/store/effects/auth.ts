import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as authActions from '../actions/auth';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
  ) {}
  @Effect()
  writeLogin$ = this.actions$.pipe(
    ofType(authActions.LOGIN),
    switchMap(() => {
      localStorage.setItem('loggedIn', 'logged');
      return of(true);
    }),
    map(() => new authActions.LoginSuccess())
  );
  @Effect()
  writeLogout$ = this.actions$.pipe(
    ofType(authActions.LOGOUT),
    switchMap(() => {
      localStorage.removeItem('loggedIn');
      return of(true);
    }),
    map(() => new authActions.LogoutSuccess())
  );
}
