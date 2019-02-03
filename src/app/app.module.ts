import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideoSelectedComponent } from './components/video-selected/video-selected.component';
import { MovieSelectedComponent } from './components/movie-selected/movie-selected.component';
import { reducers, metaReducers } from './store/reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { VideosEffects } from './store/effects/videos.effect';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { AuthEffects } from './store/effects/auth';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoItemComponent,
    VideoSelectedComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieSelectedComponent,
    LoginButtonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([VideosEffects, AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
