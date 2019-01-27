import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Video } from '../models';

const videosLink = '';
@Injectable({
    providedIn: 'root'
})
export class VideoService {
    constructor(private http: HttpClient) { }

    getVideos(): Observable<Video[]> {
        return this.http
            .get<Video[]>(videosLink)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}
