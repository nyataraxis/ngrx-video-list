import { Action } from '@ngrx/store';
import { Video } from '../../models/videos';

export const SELECT = '[Videos] Select';
export const ADD_ONE = '[Videos] Add One';

export class Select implements Action {
    readonly type = SELECT;
    constructor(public payload: number) { }
}

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: Video) { }
}

export type Action = AddOne | Select;
