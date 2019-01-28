import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Movie, MovieList } from '../models';

const videosLink = 'https://raw.githubusercontent.com/nyataraxis/ngrx-video-list/master/src/files/vods.json';
@Injectable({
    providedIn: 'root'
})
export class VideoService {
    constructor(private http: HttpClient) { }

    getVideos(): Observable<MovieList> {
        return this.http
            .get<MovieList>(videosLink)
            .pipe(catchError((error: any) => throwError(error.json())));
    }
}
